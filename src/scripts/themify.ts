export const toggleTheme = () => {
  const theme = localStorage.getItem('theme')
  const to = theme === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', to)
  document.documentElement.setAttribute('data-theme', to)
}

export function themify() {
  const theme = localStorage.getItem('theme')
  if (!theme) {
    const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)')
    const systemTheme = systemSettingDark.matches ? 'dark' : 'light'
    localStorage.setItem('theme', systemTheme)
    document.documentElement.setAttribute('data-theme', systemTheme)
  } else {
    document.documentElement.setAttribute('data-theme', theme)
  }
}

export const init =
  '!function(){var t=localStorage.getItem("theme")||"light";document.documentElement.setAttribute("data-theme", t)}();'
