import './index.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Router } from './routes'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="system">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <Router />
      </ThemeProvider>
    </HelmetProvider>
  )
}
