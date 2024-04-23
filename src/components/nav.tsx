import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { NAV_HEIGHT } from '@/shared/constants/ui'

export default function Navbar() {
  const [isShown, setIsShown] = useState(false)
  useEffect(() => {
    if (window.scrollY > NAV_HEIGHT) {
      setIsShown(true)
    }
    addEventListener('scroll', () => {
      const onScroll = () => {
        if (window.scrollY > NAV_HEIGHT && !isShown) {
          setIsShown(true)
        } else {
          setIsShown(false)
        }
      }
      window.removeEventListener('scroll', onScroll)
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    })
  }, [])
  return (
    <header
      className={cn(
        'fixed flex flex-col items-center w-full z-10',
        isShown && ''
      )}
      style={{
        top: 0,
        left: 0,
        height: NAV_HEIGHT,
      }}
    >
      <nav
        className={cn('w-full px-4 grow max-w-screen-2xl flex items-center')}
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
