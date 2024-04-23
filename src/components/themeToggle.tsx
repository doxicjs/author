import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Button from '@/lib/ui/button'
import { Monitor, Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { dxText } from '@/lib/dx/text'
import { cn } from '@/lib/utils'

type Theme = 'dark' | 'light'

const themeMap = {
  system: {
    icon: <Monitor size={15} />,
    label: 'System',
  },
  light: {
    icon: <Sun size={15} />,
    label: 'Light',
  },
  dark: {
    icon: <Moon size={15} />,
    label: 'Dark',
  },
} as const

export default function ThemeToggle() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState<keyof typeof themeMap>('system')

  useEffect(() => {
    setTheme((localStorage.getItem('theme') as Theme) || 'system')
    setLoading(false)
  }, [])

  const handleTheme = (theme: keyof typeof themeMap) => () => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }

    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }

    if (theme === 'system') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      localStorage.removeItem('theme')
      setTheme('system')
    }
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button size="icon">{!loading && themeMap[theme].icon}</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="w-full border border-neutral-a6 rounded bg-gradient-to-b from-neutral-a1 backdrop-blur"
          sideOffset={8}
          style={{
            minWidth: '10rem',
          }}
        >
          <DropdownMenu.Label
            className={dxText(
              'heading-compact-01',
              'px-3 py-2 border-neutral-a6 border-b'
            )}
          >
            Change Theme
          </DropdownMenu.Label>
          {Object.keys(themeMap).map((key) => (
            <DropdownMenu.Item
              key={key}
              onClick={handleTheme(key as keyof typeof themeMap)}
              disabled={key == theme}
              className={dxText(
                'body-compact-01',
                cn(
                  'p-3 flex gap-3 items-center hover:bg-neutral-a4 active:bg-neutral-a5',
                  key == theme && 'text-primary-11'
                )
              )}
            >
              {themeMap[key as keyof typeof themeMap].icon}{' '}
              {themeMap[key as keyof typeof themeMap].label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
