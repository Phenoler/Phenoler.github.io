export const useTheme = () => {
  const themes = {
    light: {
      '--bg-color': '#ffffff',         // 纯白色背景
      '--text-color': '#1a1a1a',       // 近黑色主文本
      '--primary-color': '#666666',    // 中灰色作为主色调
      '--primary-dark': '#333333',     // 深灰色用于悬停状态
      '--secondary-color': '#f9f9f9',  // 非常浅的灰色背景
      '--accent-color': '#444444',     // 中深灰色作为点缀色
      '--hover-color': '#f0f0f0',      // 浅灰色悬停背景
      '--card-bg': '#ffffff',          // 白色卡片背景
      '--border-color': '#e0e0e0'      // 浅灰色边框
    },
    dark: {
      '--bg-color': '#121212',         // 深黑色背景
      '--text-color': '#e0e0e0',       // 浅灰色文本
      '--primary-color': '#999999',    // 浅灰色作为主色调
      '--primary-dark': '#cccccc',     // 更亮的灰色用于悬停
      '--secondary-color': '#1e1e1e',  // 稍亮的黑色背景
      '--accent-color': '#bbbbbb',     // 中灰色作为点缀色
      '--hover-color': '#2a2a2a',      // 悬停背景
      '--card-bg': '#1e1e1e',          // 卡片背景
      '--border-color': '#333333'      // 深灰色边框
    }
  }

  const setTheme = (themeName) => {
    const theme = themes[themeName]
    Object.keys(theme).forEach(key => {
      document.documentElement.style.setProperty(key, theme[key])
    })
    localStorage.setItem('theme', themeName)
  }

  const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    return savedTheme
  }

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'
    setTheme(currentTheme)
    return currentTheme
  }

  return { setTheme, loadTheme, toggleTheme }
}