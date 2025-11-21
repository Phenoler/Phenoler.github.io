import { useTheme } from '@/utils/useTheme'

export const contactItems = [
  {
    id: 1,
    platform: 'Bilibili',
    icon: '',
    info: 'Phenoler',
    link: 'https://space.bilibili.com/180160150?spm_id_from=333.1007.0.0',
    actionText: '访问主页',
    qrCode: false,
    colorVar: '--primary-color'
  },
  {
    id: 2,
    platform: 'GitHub',
    icon: '',
    info: 'Phenol',
    link: 'https://github.com/Phenoler',
    actionText: '访问主页',
    qrCode: false,
    colorVar: '--accent-color'
  },
  {
    id: 3,
    platform: 'QQ',
    icon: '',
    info: '3224291290',
    link: '',
    actionText: '复制号码',
    qrCode: false,
    colorVar: '--primary-dark'
  },
  {
    id: 4,
    platform: '微信',
    icon: '',
    info: 'ClichensWQW',
    link: '',
    actionText: '复制ID',
    qrCode: false,
    colorVar: '--accent-color'
  }
]

// 获取主题相关功能
export const useContactTheme = () => {
  const { loadTheme } = useTheme()
  const currentTheme = loadTheme()
  
  return {
    currentTheme
  }
}

// 处理联系方式的动作
export const handleContactAction = (item) => {
  if (item.link) {
    window.open(item.link, '_blank')
  } else if (item.info) {
    navigator.clipboard.writeText(item.info)
    alert(`${item.platform} ${item.info} 已复制`)
  }
}