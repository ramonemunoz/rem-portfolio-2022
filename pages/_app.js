import '../styles/index.css'
import '../styles/main.scss'

import { AppWrapper } from '../context/app-state'; 

export default function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}
