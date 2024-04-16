import { MetaProvider, Title } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import './app.css'
import DefaultLayout from './layouts/default'

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>jskhan.</Title>
          <DefaultLayout>{props.children}</DefaultLayout>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
