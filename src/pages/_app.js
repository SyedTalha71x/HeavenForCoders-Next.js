import '@/styles/globals.css'
import styles from '../styles/Home.module.css'
import { Navbar } from '../Components/Navbar'


export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
  </>
}
