import { dxText } from '@/lib/dx/text'
import { NAV_HEIGHT, TOC_WIDTH } from '@/shared/constants/ui'
import type { MarkdownHeading } from 'astro'

type TRootProps = {
  headings: MarkdownHeading[]
}

const Root = (props: TRootProps) => {
  return (
    <aside
      className="sticky hidden lg:block rounded border overflow-hidden"
      style={{
        top: `${NAV_HEIGHT}px`,
        width: `${TOC_WIDTH}px`,
        height: 'max-content',
      }}
    >
      <nav className="relative w-full grow rounded h-full">
        <div className="px-3 py-2 border-b w-full">
          <span className={dxText('heading-compact-01')}>
            Table of Contents
          </span>
        </div>

        <ul className="grow">
          {props.headings.map((h) => {
            if (h.depth === 1) return
            return (
              <li key={h.slug} className="mb-2 w-full">
                <a
                  href={`#${h.slug}`}
                  className="text-neutral-11 hover:text-primary-11 w-full relative block group"
                >
                  <div
                    className="bg-neutral-6 absolute group-hover:bg-primary-11"
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
