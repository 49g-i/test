import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    })

    function animate(time) {
      lenis.raf(time)
      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
