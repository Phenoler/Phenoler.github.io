import { ref, onMounted } from 'vue'
import { useTheme } from '@/utils/useTheme'
import axios from 'axios'

export default {
  name: 'HomeView',
  setup() {
    const { currentTheme } = useTheme()
    const contentSection = ref(null)
    const dailyQuote = ref('每日分享：好身体和好心情') // 默认值
    const isLoading = ref(false)

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
      },
      {
        icon: '💵',
        title: '板块四',
        description: '###',
        color: '#99ddcc'
      }
    ]

    // 获取每日名言
    const fetchDailyQuote = async () => {
      try {
        isLoading.value = true
        const response = await axios.get('https://zenquotes.io/api/random')
        
        if (response.data && response.data[0]) {
          const quoteData = response.data[0]
          // 使用 q (quote) 和 a (author) 字段
          dailyQuote.value = `"${quoteData.q}" — ${quoteData.a}`
        }
      } catch (error) {
        console.error('获取名言失败:', error)
        // 失败时使用备用名言
        const fallbackQuotes = [
          '"生活就像一盒巧克力，你永远不知道下一颗是什么味道" — 《阿甘正传》',
          '"成功的秘诀在于对目标的执着追求" — 爱迪生',
          '"今天是你余生中最年轻的一天" — 佚名',
          '"行动是治愈恐惧的良药" — 戴尔·卡耐基',
          '"好身体和好心情是最好的财富" — 佚名'
        ]
        dailyQuote.value = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)]
      } finally {
        isLoading.value = false
      }
    }

    const scrollToContent = () => {
      contentSection.value.scrollIntoView({ behavior: 'smooth' })
    }

    // 组件挂载时获取名言
    onMounted(() => {
      fetchDailyQuote()
    })

    return {
      currentTheme,
      features,
      contentSection,
      dailyQuote,
      isLoading,
      scrollToContent,
      fetchDailyQuote
    }
  }
}