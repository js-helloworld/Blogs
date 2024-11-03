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

  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`)
    return sidebar
  }

  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .sort((a, b) => {
      const filePathA = path.join(dir, a)
      const filePathB = path.join(dir, b)
      const attrA = getMarkdownAttr(filePathA, attr)
      const attrB = getMarkdownAttr(filePathB, attr)
      return attrA.localeCompare(attrB)
    })

  files.forEach((fileName) => {
    const filePath = path.join(dir, fileName)
    const path2 = dir.split('\\').slice(-1)[0]
    const title = getMarkdownAttr(filePath)

    sidebar.push({
      text: title,
      link: `/${basePaht}/${path2}/${fileName}`
    })
  })

  return sidebar
}
