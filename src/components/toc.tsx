import { dxText } from '@/lib/dx/text'
import Button from '@/lib/ui/button'
import { cn } from '@/lib/utils'
import { NAV_HEIGHT, TOC_WIDTH } from '@/shared/constants/ui'
import type { MarkdownHeading } from 'astro'
import { ArrowUp } from 'lucide-react'

type TRootProps = {
  className?: string
  headings: MarkdownHeading[]
}

const Root = (props: TRootProps) => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <aside
      className={cn(
        'sticky hidden lg:block rounded border border-neutral-a6 overflow-hidden',
        props.className
      )}
      style={{
        top: `${NAV_HEIGHT}px`,
        width: `${TOC_WIDTH}px`,
        height: 'max-content',
      }}
    >
      <nav className="relative w-full grow rounded h-full flex flex-col">
        <div
          className={dxText(
            'heading-compact-01',
            'px-3 border-b border-neutral-a6 w-full bg-background flex items-center justify-between'
          )}
          style={{ height: '35px' }}
        >
          Table of Contents
          <Button variant="text" size="icon-sm" onClick={handleScrollTop}>
            <ArrowUp size={15} />
          </Button>
        </div>

        <ul className="grow h-full">
          {props.headings.map((h) => {
            if (h.depth === 1) return
            return (
              <li key={h.slug} className="w-full">
                <a
                  href={`#${h.slug}`}
                  className="text-neutral-a11 hover:text-primary-a12 w-full relative block group hover:bg-neutral-a4 active:bg-neutral-a5 py-1"
                >
                  <div
                    className="bg-neutral-a6 absolute group-hover:bg-primary-a12"
                    style={{
                      top: '50%',
                      left: 0,
                      width: `${(h.depth - 1) * 8}px`,
                      height: 1,
                    }}
                  />
                  <span
                    className={dxText('body-compact-01')}
                    style={{
                      paddingLeft: `${(h.depth - 1) * 16}px`,
                    }}
                  >
                    {h.text}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

type TSpacerProps = {
  className?: string
}

const Spacer = (props: TSpacerProps) => {
  return (
    <div
      className={cn('hidden xl:block', props.className)}
      style={{
        width: `${TOC_WIDTH}px`,
      }}
    />
  )
}

export default {
  Root,
  Spacer,
}
