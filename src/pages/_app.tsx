import RootLayout from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </main>
  )
}
