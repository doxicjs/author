import { JSX, ParentProps, Show, mergeProps, splitProps } from 'solid-js'
import { dxText } from '../dx/text'
import { cn } from '../utils/cn'
import { animate } from 'motion'

export type ButtonProps = ParentProps &
  JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
    withAnimation?: boolean
  }

const Button = (props: ButtonProps) => {
  const merged = mergeProps(
    {
      type: 'button',
      withAnimation: false,
    } satisfies ButtonProps,
    props
  )
  const [local, rest] = splitProps(merged, [
    'children',
    'class',
    'withAnimation',
  ])
  return (
    <button
      class={cn(
        'relative p-[1px] shadow shadow-primary-3 text-primary-12 rounded overflow-hidden flex items-center justify-center bg-primary-7 z-0',
        local.class
      )}
      {...rest}
    >
      <Show when={local.withAnimation}>
        <div
          ref={(el) => {
            animate(
              el,
              {
                rotate: [360, 0],
              },
              { duration: 6, easing: 'linear', repeat: Infinity }
            )
          }}
          class="absolute bg-gradient-to-r from-primary-7 via-primary-a9 to-primary-7"
          style={{
            top: '50%',
            width: '0.75rem',
            height: '12rem',
            'transform-origin': 'top center',
            'z-index': '-1',
          }}
        />
      </Show>

      <div
        class={dxText('body-compact-02', 'px-4 bg-primary-3 py-3 rounded-sm')}
      >
        {local.children}
      </div>
    </button>
  )
}

export default Button
