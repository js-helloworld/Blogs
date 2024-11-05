import { defineConfig } from 'vitepress'
import { generateSidebar } from '../plugin/generateSidebar'
import { getLink } from '../plugin/tool'
import path from 'path'
import fs from 'fs'

const folders = fs
  .readdirSync(path.join(__dirname, '../views'), {
    withFileTypes: true
  })
  .map((dirent) => dirent.name)

const sidebar = {}
const nav: { text: string; link: string }[] = []
folders.forEach((folder) => {
  let attr = 'date'
  if (folder === 'leetcode') {
    attr = 'order'
  }
  sidebar[`/views/${folder}`] = generateSidebar(
    path.join(__dirname, '../views', folder),
    attr
  )

  nav.push({
    text: folder,
    link: getLink(sidebar[`/views/${folder}`])
  })
})

nav.unshift({
  text: '首页',
  link: `/`
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Blogs/',
  title: '个人博客',
  // description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/js-helloworld/Blogs' }
    ],
    search: {
      provider: 'local'
    }
  }
})
