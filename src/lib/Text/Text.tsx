import {
  splitProps,
  type ParentProps,
  ValidComponent,
  mergeProps,
} from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { type TTextVariant, textVariants } from './variants'

// POLYMORPHICS COMPONENT
export type TextProps = ParentProps & {
  as?: ValidComponent
  variant?: TTextVariant
  class?: string
  href?: string
}

export default function Text(props: TextProps) {
  const merged = mergeProps(
    { as: 'span', variant: 'body-01' } satisfies TextProps,
    props
  )
  const [local, rest] = splitProps(merged, [
    'as',
    'children',
    'class',
    'variant',
  ])
  const style = textVariants({
    variant: local.variant,
    class: local.class,
  })
  return (
    <Dynamic component={local.as} class={style} {...rest}>
      {local.children}
    </Dynamic>
  )
}
