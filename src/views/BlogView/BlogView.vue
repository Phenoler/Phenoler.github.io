<template>
  <div class="blog-view">
    <h1>博客列表</h1>
    
    <!-- 标签筛选区域 -->
    <div class="tags-filter" v-if="allTags.length > 0">
      <span 
        v-for="tag in ['全部', ...allTags]" 
        :key="tag"
        :class="['filter-tag', { active: selectedTag === tag }]"
        @click="selectedTag = tag"
      >
        {{ tag }}
      </span>
    </div>
    
    <div class="blog-list">
      <div v-for="blog in filteredBlogs" :key="blog.slug" class="blog-card">
        <h2>{{ blog.title }}</h2>
        <div class="meta">
          <span class="date">{{ formatDate(blog.date) }}</span>
          <span class="tags" v-if="blog.tags">
            <span v-for="tag in blog.tags.split(',')" :key="tag" class="tag">{{ tag.trim() }}</span>
          </span>
        </div>
        <router-link :to="blog.path" class="read-more">阅读更多</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// 导入逻辑功能
import { useBlogView } from './BlogView.js'

// 使用逻辑功能
const {
  blogs,
  selectedTag,
  allTags,
  filteredBlogs,
  formatDate
} = useBlogView()
</script>

<style scoped>
/* 导入样式 */
@import './BlogView.css';
</style>