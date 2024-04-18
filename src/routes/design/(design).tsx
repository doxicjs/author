import { sortBy } from 'lodash-es'
import { For } from 'solid-js'

const sizes = {
  xs: '0.75rem', // 1
  sm: '0.875rem', // 2
  base: '1rem', // 3
  md: '1.125rem', // 4
  lg1: '1.25rem', // 5
  lg2: '1.5rem', // 6
  lg3: '1.75rem', // 7
  xl1: '2rem', // 8
  xl2: '2.25rem', // 9
  xl3: '2.625rem', // 10
  xxl1: '3rem', // 11
  xxl2: '3.375rem', // 12
  xxl3: '3.75rem', // 13
  xxxl1: '4.25rem', // 14
  xxxl2: '4.75rem', // 15
  xxxx1: '5.25rem', // 16
  xxxx2: '5.75rem', // 17
}

export default function Design() {
  return (
    <main class="grow flex flex-col p-8">
      <ul>
        <For
          each={sortBy(Object.keys(sizes), (k) =>
            parseInt(sizes[k as keyof typeof sizes].slice(0, -3))
          )}
        >
          {(key) => (
            <li
              class="border-b first-of-type:border-t border-x p-1 flex items-center"
              style={{
                'font-size': sizes[key as keyof typeof sizes],
                'line-height': 1,
              }}
            >
              <span style={{ 'font-size': '12px', width: '100px' }}>{key}</span>
              <span>Hello world!</span>
            </li>
          )}
        </For>
      </ul>
      {/* <span class="" style={{ 'font-size': '5.75rem' }}>
        Hello world!
      </span>
      <span style={{ 'font-size': '5.25rem' }}>Hello world!</span>
      <span style={{ 'font-size': '4.75rem' }}>Hello world!</span>
      <span style={{ 'font-size': '4.25rem' }}>Hello world!</span>
      <span style={{ 'font-size': '3.75rem' }}>Hello world!</span>
      <span style={{ 'font-size': '3.375rem' }}>Hello world!</span>
      <span style={{ 'font-size': '2.625rem' }}>Hello world!</span>
      <span style={{ 'font-size': '2.25rem' }}>Hello world!</span>
      <span style={{ 'font-size': '1.75rem' }}>Hello world!</span>
      <span style={{ 'font-size': '1.5rem' }}>Hello world!</span>
      <span style={{ 'font-size': '1.25rem' }}>Hello world!</span>
      <span style={{ 'font-size': '1.125rem' }}>Hello world!</span>
      <span style={{ 'font-size': '1rem' }}>Hello world!</span>
      <span style={{ 'font-size': '0.875rem' }}>Hello world!</span>
      <span style={{ 'font-size': '0.75rem' }}>Hello world!</span> */}
    </main>
  )
}
