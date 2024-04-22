export default function Nav() {
  const handleDark = () => {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')
  }

  const handleLight = () => {
    localStorage.setItem('theme', 'light')
    document.documentElement.classList.remove('dark')
  }

  const handleSystem = () => {
    localStorage.removeItem('theme')
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  return (
    <div className="flex gap-1">
      <button onClick={handleDark} className="bg-primary-5 border p-1">
        Dark
      </button>
      <button onClick={handleLight} className="bg-primary-5 border p-1">
        Light
      </button>
      <button onClick={handleSystem} className="bg-primary-5 border p-1">
        System
      </button>
    </div>
  )
}
