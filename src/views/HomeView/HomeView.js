import { ref } from 'vue'
import { useTheme } from '@/utils/useTheme'

export default {
  name: 'HomeView',
  setup() {
    const { currentTheme } = useTheme()
    const contentSection = ref(null)

    const features = [
      {
        icon: '🎨',
        title: '板块一',
        description: '###',
        color: '#99ddcc'
      },
      {
        icon: '⚡',
        title: '板块二',
        description: '###',
        color: '#ff9a8b'
      },
      {
        icon: '🔒',
        title: '板块三',
        description: '###',
        color: '#99ddcc'
      },      {
        icon: '💵',
        title: '板块四',
        description: '###',
        color: '#99ddcc'
      }
    ]

    const scrollToContent = () => {
      contentSection.value.scrollIntoView({ behavior: 'smooth' })
    }

    return {
      currentTheme,
      features,
      contentSection,
      scrollToContent
    }
  }
}