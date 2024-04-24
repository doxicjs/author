import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { NAV_HEIGHT } from '@/shared/constants/ui'
import ThemeToggle from './themeToggle'
import { dxText } from '@/lib/dx/text'

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
        className={cn(
          'w-full px-4 grow max-w-screen-2xl flex items-center justify-between'
        )}
      >
        <ul>
          <li>
            <a
              href="/"
              className="hover:text-primary-11 active:text-primary-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="132"
                height="120"
                viewBox="0 0 132 120"
                fill="currentColor"
                className="size-7"
              >
                <path d="M0.698562 117.597L0 105.386C3.32254 106.797 6.30186 107.357 8.93796 107.069C11.6231 106.902 14.0076 105.903 16.0915 104.073C18.1392 102.328 19.8683 99.7941 21.2786 96.4715L38.3978 56.1411L29.9999 52.5764L35.587 39.4141L43.9849 42.9788L49.7022 29.5097L62.8646 35.0968L57.1473 48.5659L62.1031 50.6695L73.4236 24L86.586 29.5871L75.2654 56.2566L80.3746 58.4253L98.9151 14.7466C100.759 10.4018 103.366 6.98393 106.736 4.49313C110.021 1.96617 113.807 0.506888 118.096 0.115294C122.299 -0.312461 126.701 0.450051 131.301 2.40282L132 14.6137C128.677 13.2034 125.698 12.6425 123.062 12.9312C120.377 13.0985 117.992 14.0972 115.909 15.9273C113.861 17.6722 112.132 20.2059 110.721 23.5285L93.537 64.0124L102.549 67.8377L96.9618 81.0001L87.9499 77.1748L82.2978 90.4903L69.1354 84.9032L74.7875 71.5877L69.6784 69.4189L58.1624 96.5489L45 90.9619L56.516 63.8319L51.5602 61.7282L33.0849 105.253C31.2406 109.598 28.6336 113.016 25.2638 115.507C21.9792 118.034 18.1927 119.493 13.9042 119.885C9.70086 120.312 5.299 119.55 0.698562 117.597Z" />
              </svg>
              <span className="sr-only">Go to Home</span>
            </a>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
