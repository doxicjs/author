import { Suspense } from 'solid-js'
import { clientOnly } from '@solidjs/start'
import type { ParentProps } from 'solid-js'

export default function DefaultLayout(props: ParentProps) {
  return (
    <>
      <Suspense>{props.children}</Suspense>
    </>
  )
}
