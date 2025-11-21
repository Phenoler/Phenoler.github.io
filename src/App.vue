<template>
  <div class="app-container">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue'
import { useTheme } from './utils/useTheme'
import { onMounted } from 'vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  setup() {
    const { loadTheme } = useTheme()
    
    // 页面加载时立即应用保存的主题
    onMounted(() => {
      loadTheme()
    })
    
    return {}
  }
}
</script>

<style>
.app-container {
  background-color: var(--bg-color);
  min-height: 100vh;
  transition: background-color 0.3s ease;
}
</style>

