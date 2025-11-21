import { ref } from 'vue'
import { marked } from 'marked'
import yaml from 'js-yaml'

// 使用Vite的glob导入所有markdown文件
const markdownFiles = import.meta.glob('/src/blogs/*.md', { as: 'raw', eager: true })

export const useMarkdown = () => {
  // 解析front-matter和内容
  const parseMarkdown = (raw) => {
    const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/
    const match = raw.match(frontMatterRegex)
    
    let frontMatter = {}
    let content = raw
    
    if (match) {
      try {
        frontMatter = yaml.load(match[1]) || {}
        content = raw.slice(match[0].length)
      } catch (e) {
        console.error('Error parsing front matter:', e)
      }
    }
    
    return {
      meta: frontMatter,
      html: marked(content)
    }
  }

  // 获取所有博客列表
  const getBlogList = () => {
    return Object.entries(markdownFiles).map(([path, raw]) => {
      const { meta } = parseMarkdown(raw)
      const slug = path.split('/').pop().replace('.md', '')
      return {
        slug,
        ...meta,
        path: `/blog/${slug}`
      }
    }).sort((a, b) => new Date(b.date) - new Date(a.date))
  }

  // 获取单个博客内容
  const getBlogContent = (slug) => {
    const path = `/src/blogs/${slug}.md`
    if (markdownFiles[path]) {
      return parseMarkdown(markdownFiles[path])
    }
    return null
  }

  return {
    getBlogList,
    getBlogContent
  }
}