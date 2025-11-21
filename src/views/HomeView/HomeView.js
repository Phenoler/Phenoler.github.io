import { ref, onMounted } from 'vue'
import { useTheme } from '@/utils/useTheme'

export default {
  name: 'HomeView',
  setup() {
    const { currentTheme } = useTheme()
    const contentSection = ref(null)
    const dailyQuote = ref('每日分享：好身体和好心情') 
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

    // 本地名言库 - 最稳定的解决方案
    const quotes = [
      '"志不立，天下无可成之事" — 王阳明',
      '"博观而约取，厚积而薄发" — 苏轼',
      '"天行健，君子以自强不息" — 《周易》',
      '"千里之行，始于足下" — 老子',
      '"学而不思则罔，思而不学则殆" — 孔子',
      '"生活就像一盒巧克力，你永远不知道下一颗是什么味道" — 《阿甘正传》',
      '"成功的秘诀在于对目标的执着追求" — 爱迪生',
      '"今天是你余生中最年轻的一天" — 佚名',
      '"行动是治愈恐惧的良药" — 戴尔·卡耐基',
      '"好身体和好心情是最好的财富" — 佚名',
      '"代码写得好，bug自然少" — 程序员箴言',
      '"学习是投资自己最好的方式" — 佚名',
      '"坚持就是胜利" — 佚名',
      '"机会总是留给有准备的人" — 路易斯·巴斯德',
      '"知识就是力量" — 弗朗西斯·培根',
      '"时间就是金钱" — 本杰明·富兰克林',
      '"想象力比知识更重要" — 阿尔伯特·爱因斯坦',
      '"Stay hungry, stay foolish" — 史蒂夫·乔布斯',
      '"简单就是美" — 编程哲学',
      '"每天进步一点点" — 成长格言'
    ]

    // 获取每日名言 - 从本地库随机选择
    const fetchDailyQuote = () => {
      try {
        isLoading.value = true
        
        // 从本地名言库随机选择
        const randomIndex = Math.floor(Math.random() * quotes.length)
        dailyQuote.value = quotes[randomIndex]
        
      } catch (error) {
        console.error('获取名言失败:', error)
        dailyQuote.value = '"好身体和好心情是最好的财富" — 佚名'
      } finally {
        isLoading.value = false
      }
    }

    const scrollToContent = () => {
      if (contentSection.value) {
        contentSection.value.scrollIntoView({ behavior: 'smooth' })
      }
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