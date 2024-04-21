import { Suspense } from 'solid-js'
import type { ParentProps } from 'solid-js'
import { DropDownMenu } from '~/lib'
import Button from '~/lib/button'

export default function DefaultLayout(props: ParentProps) {
  return (
    <>
      <header class="w-full bg-primary-2">
        <nav class="w-full max-w-screen-lg mx-auto px-4 h-8">
          <ul>
            <li>Home</li>
          </ul>

          <DropDownMenu></DropDownMenu>
        </nav>
      </header>
      <Suspense>{props.children}</Suspense>
    </>
  )
}
