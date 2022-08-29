import { AppWrapper } from '../context/app-state'; 

import '../styles/main.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}
