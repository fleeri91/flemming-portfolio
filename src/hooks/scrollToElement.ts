import { useCallback } from 'react'

export const useScrollToElement = () => {
  return useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }
  }, [])
}
