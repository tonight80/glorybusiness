<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center pt-24 sm:pt-32 pb-16 px-6 md:px-12 overflow-hidden bg-[#090909]"
  >
    <!-- Particle Canvas -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full pointer-events-none z-0"></canvas>

    <!-- Ambient Glows -->
    <div class="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] bg-[#0AA5FF]/8 blur-[150px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#6C5CE7]/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
      <!-- Left Content -->
      <div class="max-w-2xl">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0AA5FF]/8 border border-[#0AA5FF]/20 mb-8 hero-animate"
          style="animation-delay: 0.2s"
        >
          <span class="w-2 h-2 bg-[#0AA5FF] rounded-full animate-pulse"></span>
          <span class="text-[#0AA5FF] text-xs font-semibold uppercase tracking-widest">Слоты открыты</span>
        </div>

        <!-- Title -->
        <h1
          class="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.08] mb-6 sm:mb-8 text-[#EDE8D4] tracking-tight hero-animate"
          style="animation-delay: 0.4s"
        >
          Качественный подход<br />
          к разработке
          <span class="gradient-text">ваших проектов</span>
        </h1>

        <!-- Subtitle -->
        <p
          class="text-[16px] sm:text-[18px] leading-relaxed mb-10 sm:mb-12 max-w-xl text-[#EDE8D4]/45 font-light hero-animate"
          style="animation-delay: 0.6s"
        >
          Я предоставляю не только собственное дизайн агентство,
          а так же сотрудничаю с
          <span class="text-[#0AA5FF] font-medium">full stack разработчиками</span>
          и дизайнерами разных сфер
        </p>

        <!-- CTA Buttons -->
        <div class="flex items-center gap-4 sm:gap-5 flex-wrap hero-animate" style="animation-delay: 0.8s">
          <a href="https://t.me/causeiknowu" class="btn-cta w-full sm:w-auto text-center">
            🔥 Бесплатный разбор сайта
          </a>
          <a href="https://t.me/causeiknowu" class="btn-outline w-full sm:w-auto justify-center">
            <TelegramIcon class="w-[18px] h-[18px] shrink-0 text-[#0AA5FF]" />
            <span class="text-[#EDE8D4]/80 leading-none">@causeiknowu</span>
          </a>
        </div>

        <!-- Floating Metric Badges -->
        <div class="flex items-center gap-6 mt-12 hero-animate" style="animation-delay: 1s">
          <div v-for="badge in badges" :key="badge.label" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#0AA5FF]/10 border border-[#0AA5FF]/15 flex items-center justify-center">
              <span class="text-[#0AA5FF] text-lg">{{ badge.icon }}</span>
            </div>
            <div>
              <div class="text-[#EDE8D4] text-sm font-bold">{{ badge.value }}</div>
              <div class="text-[#EDE8D4]/30 text-[11px]">{{ badge.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right - Hero Image -->
      <div class="relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0 hero-animate" style="animation-delay: 0.6s">
        <div class="relative">
          <!-- Glow ring behind image -->
          <div class="absolute inset-0 rounded-full bg-[#0AA5FF]/10 blur-[60px] scale-110"></div>
          <img
            src="@/assets/icon/HeroImage.webp"
            alt="GB Logo"
            class="relative w-2/3 sm:w-full max-w-[400px] lg:max-w-[480px] object-contain animate-float drop-shadow-[0_0_40px_rgba(10,165,255,0.25)]"
          />
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
      <span class="text-[#EDE8D4]/20 text-[10px] uppercase tracking-[4px] font-medium">Scroll</span>
      <div class="w-[1px] h-8 bg-gradient-to-b from-[#0AA5FF]/50 to-transparent animate-bounce-down"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import TelegramIcon from './TelegramIcon.vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrame: number | null = null

const badges = [
  { icon: '⚡', value: '48 часов', label: 'срок готовности' },
  { icon: '📈', value: '+200%', label: 'рост конверсии' },
  { icon: '🎯', value: '40%', label: 'средний CTR' },
]

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const particles: Particle[] = []
  const particleCount = 60

  function resize() {
    if (!canvas) return
    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx!.scale(window.devicePixelRatio, window.devicePixelRatio)
  }

  resize()
  window.addEventListener('resize', resize)

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.7 ? '#0AA5FF' : '#EDE8D4',
    })
  }

  function animate() {
    if (!canvas || !ctx) return
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

    particles.forEach((p, i) => {
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1
      if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.globalAlpha = p.opacity
      ctx.fill()

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[j].x - p.x
        const dy = particles[j].y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 150) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = '#0AA5FF'
          ctx.globalAlpha = (1 - dist / 150) * 0.08
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    })

    ctx.globalAlpha = 1
    animationFrame = requestAnimationFrame(animate)
  }

  animate()

  onUnmounted(() => {
    if (animationFrame) cancelAnimationFrame(animationFrame)
    window.removeEventListener('resize', resize)
  })
})
</script>

<style scoped>
.hero-animate {
  opacity: 0;
  transform: translateY(30px);
  animation: heroFadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes heroFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
