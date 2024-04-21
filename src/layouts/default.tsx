import { Suspense } from 'solid-js'
import type { ParentProps } from 'solid-js'

export default function DefaultLayout(props: ParentProps) {
  return (
    <>
      <header class="w-full bg-primary-2">
        <nav class="w-full max-w-screen-lg mx-auto px-4 h-8">
          <ul>
            <li>Home</li>
          </ul>
        </nav>
      </header>
      <Suspense>{props.children}</Suspense>
    </>
  )
}
