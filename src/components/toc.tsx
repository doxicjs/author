import { dxText } from '@/lib/dx/text'
import { NAV_HEIGHT, TOC_WIDTH } from '@/shared/constants/ui'
import type { MarkdownHeading } from 'astro'

type TRootProps = {
  headings: MarkdownHeading[]
}

const Root = (props: TRootProps) => {
  return (
    <aside
      className="sticky hidden lg:block rounded border border-neutral-a6 overflow-hidden"
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
            'p-3 border-b border-neutral-a6 w-full bg-background'
          )}
        >
          Table of Contents
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

const Spacer = () => {
  return (
    <div
      className="hidden xl:block"
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
