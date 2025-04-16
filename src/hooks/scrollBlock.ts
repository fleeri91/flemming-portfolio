import { useRef, useEffect } from 'react'

const safeDocument = typeof document !== 'undefined' ? document : {}

export default function useScrollBlock(): [() => void, () => void] {
  const scrollBlocked = useRef<boolean>(false)
  const { body } = safeDocument as Document
  const html = (safeDocument as Document).documentElement

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return

    const scrollBarWidth = window.innerWidth - (html?.clientWidth || 0)
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue('padding-right')
      ) || 0

    if (html) {
      html.style.position = 'relative'
      html.style.overflow = 'hidden'
    }

    body.style.position = 'relative'
    body.style.overflow = 'hidden'
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`

    scrollBlocked.current = true
  }

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return

    if (html) {
      html.style.position = ''
      html.style.overflow = ''
    }

    body.style.position = ''
    body.style.overflow = ''
    body.style.paddingRight = ''

    scrollBlocked.current = false
  }

  useEffect(() => {
    return () => {
      if (scrollBlocked.current) {
        allowScroll()
      }
    }
  })

  return [blockScroll, allowScroll]
}
