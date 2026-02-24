<template>
  <footer ref="sectionRef" class="relative pt-12 pb-24 px-6 md:px-12 bg-[#090909] overflow-hidden">

    <!-- Ambient glows -->
    <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0AA5FF]/5 blur-[100px] rounded-full pointer-events-none"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6C5CE7]/3 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
      <!-- CTA Block -->
      <div class="text-center scroll-reveal">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/8 border border-orange-500/20 mb-8">
          <span class="text-orange-400 text-sm">⏰</span>
          <span class="text-orange-400/90 text-xs font-semibold uppercase tracking-widest">не откладывайте</span>
        </div>

        <h2 class="text-4xl md:text-6xl font-extrabold text-[#EDE8D4] mb-6 tracking-tight leading-[1.08]">
          Хватит терять деньги<br />
          <span class="gradient-text">на плохом сайте.</span>
        </h2>

        <p class="text-[#EDE8D4]/40 text-lg max-w-xl mx-auto mb-10 font-light">
          Каждый день без конверсионного лендинга — это упущенные заявки и деньги
        </p>
      </div>

      <a href="https://t.me/causeiknowu" class="btn-glow text-center scroll-reveal uppercase tracking-wider">
        🚀 ВЗОРВАТЬ ПРОДАЖИ В TELEGRAM
      </a>

      <p class="mt-10 text-[#EDE8D4]/40 text-center text-base max-w-2xl font-light scroll-reveal">
        Напишите <span class="text-[#0AA5FF] font-semibold">«ЛЕНДИНГ 48»</span>
        — сразу отправлю кейсы из вашей ниши и расчёт конверсии.
      </p>

      <!-- Footer bar -->
      <div class="mt-32 w-full flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-[#EDE8D4]/5 pt-8 scroll-reveal">
        <div class="flex items-center gap-3">
          <img src="@/assets/icon/HeroImage.webp" alt="Logo" class="w-5 h-5 object-contain opacity-30" />
          <span class="text-[#EDE8D4]/20 text-xs tracking-widest uppercase font-medium">glorybusiness</span>
        </div>
        <div class="flex items-center gap-6">
          <a href="https://t.me/causeiknowu" class="text-[#EDE8D4]/20 text-xs hover:text-[#0AA5FF] transition-colors">Telegram</a>
          <span class="text-[#EDE8D4]/8">|</span>
          <span class="text-[#EDE8D4]/10 text-[10px] uppercase tracking-widest">© 2026 all rights reserved</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { staggerDelay: 120 })
</script>