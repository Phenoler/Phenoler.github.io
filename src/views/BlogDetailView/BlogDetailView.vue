<template>
  <div class="blog-detail" v-if="blog">
    <div class="card">
      <div class="header">
        <h1>{{ blog.meta.title }}</h1>
        <div class="meta">
          <span class="date">{{ formatDate(blog.meta.date) }}</span>
          <span class="tags" v-if="blog.meta.tags">
            <span v-for="tag in blog.meta.tags.split(',')" :key="tag" class="tag">{{ tag.trim() }}</span>
          </span>
        </div>
      </div>
      <div class="content" v-html="blog.html"></div>
      
      <!-- utterances 评论容器 -->
      <div class="comments" v-if="blog">
        <h2>评论</h2>
        <div ref="utterancesEl"></div>
      </div>
      
      <router-link to="/blog" class="back-link">← 返回博客列表</router-link>
    </div>
  </div>
  <div v-else class="loading">
    <p>加载中...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch , nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useMarkdown } from '@/utils/useMarkDown'

const route = useRoute()
const { getBlogContent } = useMarkdown()
const blog = ref(null)
const utterancesEl = ref(null) // utterances 容器引用

// 初始化 utterances
const initUtterances = () => {
  if (!utterancesEl.value) return

  // 先清除旧的评论（防止重复加载）
  while (utterancesEl.value.firstChild) {
    utterancesEl.value.removeChild(utterancesEl.value.firstChild)
  }

  utterancesEl.value.innerHTML = '';

  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.setAttribute('repo', 'Phenoler/BlogComments')
  script.setAttribute('issue-term', 'pathname')
  script.setAttribute('issue-number', blog.value.meta.title)
  script.setAttribute('theme', 'github-light')
  script.setAttribute('crossorigin', 'anonymous')
  script.setAttribute('label', 'comments-zh')
  script.setAttribute('data-i18n', 'zh-CN');
  script.async = true
  utterancesEl.value.appendChild(script)
}

onMounted(() => {
  const slug = route.params.slug
  blog.value = getBlogContent(slug)
  nextTick(initUtterances)
})

// 当路由变化时重新加载评论（适用于动态路由）
watch(
  () => route.params.slug,
  async () => {
    if (route.name === 'blog-detail') {
      const slug = route.params.slug
      blog.value = getBlogContent(slug)
      await nextTick() // 等待 DOM 更新
      initUtterances()
    }
  }
)

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
</script>

<style scoped>
.blog-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.card{
  background-color: var(--card-bg);
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  padding: 20px;
}

.header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

h1 {
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-color);
  opacity: 0.8;
  font-size: 0.9rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.content {
  color: var(--text-color);
  line-height: 1.6;
}

.back-link {
  display: inline-block;
  margin-top: 2rem;
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--primary-dark);
}

.loading {
  text-align: center;
  padding: 2rem;
  color: var(--text-color);
}
</style>

<style>
/* Markdown内容样式 */
.blog-detail :deep() h2,
.blog-detail :deep() h3,
.blog-detail :deep() h4 {
  color: var(--text-color);
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.blog-detail :deep() p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.blog-detail :deep() a {
  color: var(--primary-color);
  text-decoration: none;
}

.blog-detail :deep() a:hover {
  text-decoration: underline;
}

.blog-detail :deep() code {
  background-color: var(--secondary-color);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: monospace;
}

.blog-detail :deep() pre {
  background-color: var(--secondary-color);
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1rem 0;
}

.blog-detail :deep() blockquote {
  border-left: 4px solid var(--primary-color);
  padding-left: 1rem;
  margin: 1rem 0;
  color: var(--text-color);
  opacity: 0.8;
}

.blog-detail :deep() ul,
.blog-detail :deep() ol {
  margin: 1rem 0;
  padding-left: 2rem;
}

.blog-detail :deep() li {
  margin-bottom: 0.5rem;
}

.blog-detail :deep() img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1rem 0;
}

/* 评论区域样式 */
.comments {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.comments h2 {
  color: var(--text-color);
  margin-bottom: 1.5rem;
}
</style>