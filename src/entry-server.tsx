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
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Lexend:wght@100..900&display=swap"
            rel="preload"
            as="style"
            // @ts-expect-error: we want onload treated as an html attr
            onload="this.onload=null;this.rel='stylesheet'"
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Lexend:wght@100..900&display=swap"
              rel="stylesheet"
              type="text/css"
            />
          </noscript>
          {/* FONT END */}
        </head>
        <body class="antialiased bg-background text-neutral-12 font-display">
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
