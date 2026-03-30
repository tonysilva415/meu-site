import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function useImageLoader() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setImagesLoaded(false)

    const checkImages = () => {
      const images = Array.from(document.querySelectorAll('img'))

      if (images.length === 0) {
        setTimeout(() => setImagesLoaded(true), 100)
        return
      }

      let loadedCount = 0
      const totalImages = images.length

      const checkImageLoad = () => {
        loadedCount++
        if (loadedCount === totalImages) {
          setTimeout(() => setImagesLoaded(true), 300)
        }
      }

      images.forEach((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          checkImageLoad()
        } else {
          const onLoad = () => {
            checkImageLoad()
            img.removeEventListener('load', onLoad)
            img.removeEventListener('error', onError)
          }

          const onError = () => {
            checkImageLoad()
            img.removeEventListener('load', onLoad)
            img.removeEventListener('error', onError)
          }

          img.addEventListener('load', onLoad)
          img.addEventListener('error', onError)
        }
      })
    }

    const timeout = setTimeout(() => {
      checkImages()
    }, 100)

    return () => {
      clearTimeout(timeout)
    }
  }, [location.pathname])

  return imagesLoaded
}

