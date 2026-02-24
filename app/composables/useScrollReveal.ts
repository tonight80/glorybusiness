import { onMounted, onUnmounted, type Ref } from 'vue'

export function useScrollReveal(containerRef: Ref<HTMLElement | null>, options?: {
  threshold?: number
  rootMargin?: string
  staggerDelay?: number
}) {
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px', staggerDelay = 100 } = options || {}
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!containerRef.value) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          const delay = el.dataset.revealDelay
          if (delay) {
            setTimeout(() => {
              el.classList.add('revealed')
            }, parseInt(delay))
          } else {
            el.classList.add('revealed')
          }
          observer?.unobserve(el)
        }
      })
    }, {
      threshold,
      rootMargin
    })

    const elements = containerRef.value.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
    )
    elements.forEach((el, index) => {
      if (staggerDelay && !el.getAttribute('data-reveal-delay')) {
        el.setAttribute('data-reveal-delay', String(index * staggerDelay))
      }
      observer?.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
