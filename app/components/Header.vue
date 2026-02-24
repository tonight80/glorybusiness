<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-500',
      scrolled ? 'py-3 backdrop-blur-xl bg-[#090909]/80 border-b border-white/5' : 'py-5 bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2 sm:gap-3 no-underline group">
        <div
          class="w-8 h-8 flex items-center justify-center rounded-xl border border-[#EDE8D4]/20 bg-[#EDE8D4]/5 group-hover:bg-[#EDE8D4]/10 group-hover:border-[#0AA5FF]/30 transition-all duration-300 flex-shrink-0"
        >
          <img src="@/assets/icon/HeroImage.webp" alt="Logo" class="w-5 h-5 object-contain" />
        </div>
        <span class="text-[#EDE8D4] text-lg font-semibold tracking-tight">glorybusiness</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-[#EDE8D4]/50 text-sm font-medium hover:text-[#0AA5FF] transition-colors duration-300 relative group"
        >
          {{ link.label }}
          <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0AA5FF] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>

      <a href="https://t.me/causeiknowu" class="hidden sm:inline-flex btn-cta !px-6 !py-2.5 !text-[13px]">
        Написать в ТГ
      </a>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-[#EDE8D4]/10 bg-white/5"
        @click="mobileOpen = !mobileOpen"
      >
        <div class="flex flex-col gap-1.5">
          <span
            :class="[
              'w-5 h-[1.5px] bg-[#EDE8D4] transition-all duration-300 origin-center',
              mobileOpen ? 'rotate-45 translate-y-[3px]' : ''
            ]"
          ></span>
          <span
            :class="[
              'w-5 h-[1.5px] bg-[#EDE8D4] transition-all duration-300',
              mobileOpen ? 'opacity-0' : 'opacity-100'
            ]"
          ></span>
          <span
            :class="[
              'w-5 h-[1.5px] bg-[#EDE8D4] transition-all duration-300 origin-center',
              mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''
            ]"
          ></span>
        </div>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="md:hidden absolute top-full left-0 w-full bg-[#090909]/95 backdrop-blur-xl border-b border-white/5 px-6 py-6"
      >
        <nav class="flex flex-col gap-4">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-[#EDE8D4]/70 text-base font-medium hover:text-[#0AA5FF] transition-colors py-2"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </a>
          <a href="https://t.me/causeiknowu" class="btn-cta text-center mt-2" @click="mobileOpen = false">
            Написать в ТГ
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Преимущества', href: '#privileges' },
  { label: 'Отзывы', href: '#social-proof' },
  { label: 'Как работает', href: '#how-it-works' },
  { label: 'Оферта', href: '#offer' },
  { label: 'FAQ', href: '#faq' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>