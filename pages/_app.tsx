import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import { RecoilRoot } from 'recoil'
import '../styles/globals.css'

function MyApp({ Component, pageProps } : AppProps) {
  return (
    //Higher order component
    <AuthProvider>
      <RecoilRoot>
        <Component {...pageProps}/>
      </RecoilRoot>
    </AuthProvider>
  )
}

export default MyApp