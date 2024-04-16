// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server'

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" />
          {assets}
          <script>
            {
              '!function(){var t=localStorage.getItem("theme")||"light";document.documentElement.setAttribute("data-theme", t)}();'
            }
          </script>
        </head>
        <body
          class="dark:bg-neutral-950 dark:text-neutral-50 bg-neutral-50 text-neutral-950"
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
))
