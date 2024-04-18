import { Suspense } from 'solid-js'
import type { ParentProps } from 'solid-js'

export default function DefaultLayout(props: ParentProps) {
  return (
    <>
      <Suspense>{props.children}</Suspense>
    </>
  )
}
