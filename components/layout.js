import Meta from '../components/meta'
import { consoleLog } from '../uitls'

export default function Layout({ preview, children }) {
  consoleLog()
  return (
    <>
      <Meta />
      {children}
    </>
  )
}
