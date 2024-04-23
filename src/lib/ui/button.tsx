import { forwardRef } from 'react'
import { dxText } from '../dx/text'
import { cn } from '../utils'

type TProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'neutral'
  size?: 'base' | 'icon'
}

const Button = forwardRef<HTMLButtonElement, TProps>((props, ref) => {
  const {
    type = 'button',
    className,
    children,
    size = 'base',
    variant = 'neutral',
    ...rest
  } = props
  return (
    <button
      ref={ref}
      type={type}
      className={dxText(
        'body-compact-02',
        cn(
          'border flex items-center rounded',
          size == 'base' && 'px-3 py-2',
          size == 'icon' && 'size-7 justify-center',
          variant == 'primary' &&
            'border-primary-6 bg-primary-3 hover:bg-primary-4 active:bg-primary-5 hover:border-primary-7 active:border-primary-8',
          variant == 'neutral' &&
            'border-neutral-6 bg-neutral-a3 hover:bg-neutral-4 active:bg-neutral-5 hover:border-neutral-7 active:border-neutral-8',
          className
        )
      )}
      {...rest}
    >
      {children}
    </button>
  )
})

export default Button
