// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server'
import { init } from './scripts/themify'

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" />
          {assets}
          <script>{init}</script>

          {/* FONT START */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin="anonymous"
          />
          {/* MEDIA PRINT SKIPS CSS ON PAGE RENDERING & LOAD CSS ON LOAD */}
          <link
            href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
            rel="stylesheet"
            media="print"
            // @ts-expect-error: we want onload treated as an html attr
            onload="this.onload=null;this.rel='stylesheet'"
          />
          {/* IF USER DISABLED JS, FONT WILL LOAD */}
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
              rel="stylesheet"
              type="text/css"
            />
          </noscript>
          {/* FONT END */}
        </head>
        <body
          class="dark:bg-neutral-950 dark:text-neutral-50 bg-neutral-50 text-neutral-950 antialiased"
          style={{
            margin: 0,
            padding: 0,
            'font-optical-sizing': 'auto',
          }}
        >
          <div
            id="app"
            class="flex min-h-screen w-full flex-col"
            style={{
              'min-height': '100dvh',
            }}
          >
            {children}
          </div>
          {scripts}
        </body>
      </html>
    )}
  />
))
