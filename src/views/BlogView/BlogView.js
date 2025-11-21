import { ref, computed, onMounted } from 'vue'
import { useMarkdown } from '@/utils/useMarkDown'

export function useBlogView() {
  // 响应式数据
  const { getBlogList } = useMarkdown()
  const blogs = ref([])
  const selectedTag = ref('全部')
  
  // 生命周期钩子
  onMounted(() => {
    blogs.value = getBlogList()
  })
  
  // 提取所有唯一的标签
  const allTags = computed(() => {
    const tagsSet = new Set()
    blogs.value.forEach(blog => {
      if (blog.tags) {
        blog.tags.split(',').forEach(tag => {
          const trimmedTag = tag.trim()
          if (trimmedTag) {
            tagsSet.add(trimmedTag)
          }
        })
      }
    })
    return Array.from(tagsSet)
  })
  
  // 根据选中的标签筛选文章
  const filteredBlogs = computed(() => {
    if (selectedTag.value === '全部') {
      return blogs.value
    }
    return blogs.value.filter(blog => {
      if (!blog.tags) return false
      return blog.tags.split(',').some(tag => tag.trim() === selectedTag.value)
    })
  })
  
  // 格式化日期
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  return {
    blogs,
    selectedTag,
    allTags,
    filteredBlogs,
    formatDate
  }
}