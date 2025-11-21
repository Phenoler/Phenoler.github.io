import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '@/utils/useTheme'

export default {
  name: 'NavBar',
  setup() {
    const route = useRoute()
    const { loadTheme, toggleTheme } = useTheme()
    
    const currentTheme = ref('light')
    const isMenuOpen = ref(false)
    
    const siteName = 'Phenol'
    const logo = './logo/logo.svg'
    
    const navItems = [
      { text: '首页', path: '/' },
      { text: '博客', path: '/blog' },
      { text: '联系Phenol', path: '/contact' }
    ]
    
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }
    
    const handleThemeToggle = () => {
      currentTheme.value = toggleTheme()
    }
    
    onMounted(() => {
      currentTheme.value = loadTheme()
    })
    
    return {
      siteName,
      logo,
      navItems,
      currentTheme,
      isMenuOpen,
      toggleMenu,
      toggleTheme: handleThemeToggle
    }
  }
}