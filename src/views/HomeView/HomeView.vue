<template>
  <main class="home-container">
    <section class="hero">
      <h1 class="hero-title">欢迎参观Phenol的个人网站</h1>
      <p class="hero-subtitle">网页由Vue.js搭建</p>
      <button class="cta-button" @click="scrollToContent">探索更多</button>
    </section>

    <section class="features" ref="contentSection">
      <div class="feature-card" v-for="(feature, index) in features" :key="index">
        <div class="feature-icon" :style="{ backgroundColor: feature.color }">
          <span>{{ feature.icon }}</span>
        </div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-description">{{ feature.description }}</p>
      </div>
    </section>

    <section class="testimonial">
      <blockquote class="testimonial-quote">
        {{ dailyQuote }}
      </blockquote>
      <button 
        class="refresh-quote" 
        @click="fetchDailyQuote"
        :disabled="isLoading"
      >
        {{ isLoading ? '加载中...' : '换一句' }}
      </button>
    </section>
  </main>
</template>

<script>
// 正确导入组件配置
import HomeView from './HomeView.js';
export default HomeView
</script>

<style scoped src="./HomeView.css"></style>