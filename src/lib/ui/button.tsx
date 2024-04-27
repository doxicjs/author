import { forwardRef } from 'react'
import { dxText } from '../dx/text'
import { cva, type VariantProps } from 'class-variance-authority'

const btn = cva(
  'flex items-center rounded backdrop-blur border border-transparent bg-transparent',
  {
    variants: {
      color: {
        primary: 'text-primary-12',
        neutral: 'text-neutral-12',
      },
      variant: {
        outline: '',
        text: '',
      },
      hasAlpha: {
        true: '',
        false: '',
      },
      size: {
        base: 'px-3 py-2',
        icon: 'size-7 justify-center',
        'icon-sm': 'size-6 justify-center',
      },
    },
    compoundVariants: [
      // OUTLINE
      {
        color: 'primary',
        variant: 'outline',
        hasAlpha: false,
        className:
          'border-primary-6 bg-primary-3 hover:bg-primary-4 active:bg-primary-5 hover:border-primary-7 active:border-primary-8',
      },
      {
        color: 'primary',
        variant: 'outline',
        hasAlpha: true,
        className:
          'border-primary-a6 bg-primary-a3 hover:bg-primary-a4 active:bg-primary-a5 hover:border-primary-a7 active:border-primary-a8',
      },
      {
        color: 'neutral',
        variant: 'outline',
        hasAlpha: false,
        className:
          'border-neutral-6 bg-neutral-3 hover:bg-neutral-4 active:bg-neutral-5 hover:border-neutral-7 active:border-neutral-8',
      },
      {
        color: 'neutral',
        variant: 'outline',
        hasAlpha: true,
        className:
          'border-neutral-a6 bg-neutral-a3 hover:bg-neutral-a4 active:bg-neutral-a5 hover:border-neutral-a7 active:border-neutral-a8',
      },
      // TEXT
      {
        color: 'primary',
        variant: 'text',
        hasAlpha: false,
        className:
          'hover:bg-primary-4 active:bg-primary-5 text-primary-11 hover:text-primary-12',
      },
      {
        color: 'primary',
        variant: 'text',
        hasAlpha: true,
        className:
          'hover:bg-primary-a4 active:bg-primary-a5 text-primary-a11 hover:text-primary-a12',
      },
      {
        color: 'neutral',
        variant: 'text',
        hasAlpha: false,
        className:
          'hover:bg-neutral-4 active:bg-neutral-5 text-neutral-11 hover:text-neutral-12',
      },
      {
        color: 'neutral',
        variant: 'text',
        hasAlpha: true,
        className:
          'hover:bg-neutral-a4 active:bg-neutral-a5 text-neutral-a11 hover:text-neutral-a12',
      },
    ],
    defaultVariants: {
      variant: 'outline',
      size: 'base',
      color: 'neutral',
      hasAlpha: false,
    },
  }
)

type TProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof btn>

const Button = forwardRef<HTMLButtonElement, TProps>((props, ref) => {
  const {
    variant,
    type = 'button',
    className,
    children,
    size,
    color,
    hasAlpha,
    ...rest
  } = props
  return (
    <button
      ref={ref}
      type={type}
      className={dxText(
        'body-compact-02',
        btn({
          hasAlpha,
          color,
          variant,
          size,
          className,
        })
      )}
      {...rest}
    >
      {children}
    </button>
  )
})

export default Button
