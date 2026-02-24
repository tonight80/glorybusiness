<template>
  <section id="how-it-works" ref="sectionRef" class="relative py-24 px-6 md:px-12 bg-[#090909] overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="mb-16 scroll-reveal">
        <h2 class="text-4xl md:text-5xl font-bold text-[#EDE8D4] mb-4 tracking-tight">
          Как это <span class="gradient-text-static">работает</span>
        </h2>
        <p class="text-[#EDE8D4]/35 text-base max-w-lg">
          Три простых шага от идеи до готового инструмента
        </p>
      </div>

      <div class="relative">
        <!-- Timeline connector line (desktop) -->
        <div class="hidden md:block absolute top-[60px] left-[60px] right-[60px] h-[2px]">
          <div class="w-full h-full bg-gradient-to-r from-[#0AA5FF]/30 via-[#0AA5FF]/15 to-[#0AA5FF]/30 rounded-full"></div>
          <div class="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-[#0AA5FF] to-[#0AA5FF]/50 rounded-full timeline-progress"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="item in list"
            :key="item.position"
            class="step-card group scroll-reveal relative"
            :data-reveal-delay="(parseInt(item.position) - 1) * 200"
          >
            <!-- Step Number Circle -->
            <div class="step-circle">
              <span class="relative z-10 text-[13px] font-mono font-bold text-[#0AA5FF]">{{ item.position }}</span>
              <div class="absolute inset-0 rounded-full bg-[#0AA5FF]/10 group-hover:bg-[#0AA5FF]/20 group-hover:scale-110 transition-all duration-500"></div>
            </div>

            <!-- Content -->
            <h3 class="text-xl font-bold text-[#EDE8D4] mb-4 group-hover:text-[#0AA5FF] transition-colors duration-300">
              {{ item.title }}
            </h3>

            <p class="text-[#EDE8D4]/40 leading-relaxed font-light text-[15px] relative z-10">
              {{ item.description }}
            </p>

            <!-- Hover glow -->
            <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0AA5FF]/0 group-hover:bg-[#0AA5FF]/5 blur-[40px] rounded-full transition-all duration-700 pointer-events-none"></div>

            <!-- Bottom accent line -->
            <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0AA5FF] to-transparent transition-all duration-500 group-hover:w-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { staggerDelay: 0 })

const list = [
  {
    position: '01',
    title: 'Вы пишете в ТГ',
    description: 'Привет, нужен сайт. Я отправляю ссылку на этот сайт как подтверждение экспертизы.',
  },
  {
    position: '02',
    title: 'Обсуждаем детали',
    description: 'Уточняем нишу, цели, боли. Я отправляю индивидуальную оферту в PDF.',
  },
  {
    position: '03',
    title: 'Оплата и старт',
    description: 'После оплаты по ссылке начинаем работу. Через 48 часов у вас готовый инструмент.',
  },
]
</script>

<style scoped>
.step-card {
  @apply relative p-10 rounded-[32px] overflow-hidden transition-all duration-500;
  background: rgba(237, 232, 212, 0.02);
  border: 1px solid rgba(237, 232, 212, 0.06);
}

.step-card:hover {
  background: rgba(237, 232, 212, 0.04);
  border-color: rgba(10, 165, 255, 0.25);
  transform: translateY(-8px);
  box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.5), 0 0 40px rgba(10, 165, 255, 0.05);
}

.step-circle {
  @apply relative w-14 h-14 flex items-center justify-center rounded-full mb-8;
  border: 1px solid rgba(10, 165, 255, 0.25);
}

.timeline-progress {
  animation: timeline-grow 2s ease-out forwards;
  animation-play-state: paused;
}

.revealed .timeline-progress {
  animation-play-state: running;
}

@keyframes timeline-grow {
  from { width: 0; }
  to { width: 100%; }
}
</style>