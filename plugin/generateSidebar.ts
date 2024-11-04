import fs from 'fs'
import path from 'path'
import { DefaultTheme } from 'vitepress'

function getMarkdownAttr(filePath: string, type: string = 'title') {
  const content = fs.readFileSync(filePath, 'utf-8')
  var re = new RegExp(`${type}:s*(.*)`) //
  const match = content.match(re)
  const title = filePath.split('\\').slice(-1)[0]

  return match ? match[1] : title
}

const basePaht = 'views'

export function generateSidebar(
  dir: string,
  attr: string = 'title'
): DefaultTheme.SidebarItem[] {
  const sidebar: DefaultTheme.SidebarItem[] = []

  const files = fs.readdirSync(dir, { withFileTypes: true })

  files.forEach((file) => {
    if (file.isDirectory()) {
      if (file.name !== 'images') {
        const folderPath = path.join(dir, file.name)
        const files = fs
          .readdirSync(folderPath)
          .filter((file) => file.endsWith('.md'))

        const path2 = folderPath.split('\\').slice(-2).join('/')

        const items = files.map((file2) => {
          const filePath = path.join(folderPath, file2)
          const title = getMarkdownAttr(filePath)
          return {
            text: title,
            link: `/${basePaht}/${path2}/${file2}`
          }
        })

        sidebar.push({
          text: file.name,
          collapsed: true,
          items: items
        })
      }
    } else {
      const filePath = path.join(dir, file.name)
      const path2 = dir.split('\\').slice(-1)[0]
      const title = getMarkdownAttr(filePath)
      sidebar.push({
        text: title,
        link: `/${basePaht}/${path2}/${file.name}`
      })
    }
  })
  const compareAttr = (a, b) => {
    const filePathA = path.join(dir, `../../${a.link!}`)
    const filePathB = path.join(dir, `../../${b.link!}`)
    const attrA = getMarkdownAttr(filePathA, attr)
    const attrB = getMarkdownAttr(filePathB, attr)
    return attrA.localeCompare(attrB)
  }
  sidebar
    .sort((a, b) => {
      if (!a.items && !b.items) {
        return compareAttr(a, b)
      } else {
        if (a.items)
          a.items.sort((p, q) => {
            return compareAttr(p, q)
          })
        if (b.items)
          b.items.sort((p, q) => {
            return compareAttr(p, q)
          })
        return a.text!.localeCompare(b.text!)
      }
    })
    .sort((a, b) => {
      if (a.items && b.items) {
        return 0
      } else if (a.items) {
        return -1
      } else {
        return 1
      }
    })

  return sidebar
}
