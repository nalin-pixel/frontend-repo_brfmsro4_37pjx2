import React, { useEffect } from 'react'

// Global cinematic FX: smooth scroll, subtle grain class on body
const GlobalFX = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    document.body.classList.add('bg-black')
    return () => {
      document.documentElement.style.scrollBehavior = ''
      document.body.classList.remove('bg-black')
    }
  }, [])
  return null
}

export default GlobalFX
