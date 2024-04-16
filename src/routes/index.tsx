import { toggleTheme } from '~/scripts/themify'

export default function HelloWorld() {
  return (
    <main class="w-full">
      Hello world! <button onClick={toggleTheme}>Toggle</button>
    </main>
  )
}
