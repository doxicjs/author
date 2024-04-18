import { toggleTheme } from '~/scripts/themify'

export default function HelloWorld() {
  return (
    <main class="w-full flex flex-col items-center justify-center grow">
      <h1 class="text-xl">Hello world!</h1>
      <button onClick={toggleTheme}>Toggle</button>
    </main>
  )
}
