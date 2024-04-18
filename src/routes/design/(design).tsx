import { sortBy } from 'lodash-es'
import { For } from 'solid-js'

const sizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  md: '1.125rem',
  lg1: '1.25rem',
  lg2: '1.5rem',
  lg3: '1.75rem',
  xl1: '2rem',
  xl2: '2.25rem',
  xl3: '2.625rem',
  xxl1: '3rem',
  xxl2: '3.375rem',
  xxl3: '3.75rem',
  xxxl1: '4.25rem',
  xxxl2: '4.75rem',
  xxxx1: '5.25rem',
  xxxx2: '5.75rem',
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
              <span>
                {' '}
                Everyone has the right to freedom of thought, conscience and
                religion; this right includes freedom to change his religion or
                belief, and freedom, either alone or in community with others
                and in public or private, to manifest his religion or belief in
                teaching, practice, worship and observance. Everyone has the
                right to freedom of opinion and expression; this right includes
                freedom to hold opinions without interference and to seek,
                receive and impart information and ideas through any media and
                regardless of frontiers. Everyone has the right to rest and
                leisure, including reasonable limitation of working hours and
                periodic holidays with pay.{' '}
              </span>
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
