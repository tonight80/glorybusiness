<template>
  <section id="social-proof" ref="sectionRef" class="relative py-24 px-6 md:px-12 bg-[#090909] overflow-hidden">
    <!-- Ambient glow -->
    <div class="absolute top-1/2 left-[-10%] w-[400px] h-[400px] bg-[#6C5CE7]/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-16 scroll-reveal">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0AA5FF]/8 border border-[#0AA5FF]/20 mb-6">
          <span class="w-1.5 h-1.5 bg-[#0AA5FF] rounded-full animate-pulse"></span>
          <span class="text-[#0AA5FF] text-xs font-semibold uppercase tracking-widest">Реальные результаты</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-[#EDE8D4] mb-4 tracking-tight">
          Что говорят <span class="gradient-text-static">клиенты</span>
        </h2>
        <p class="text-[#EDE8D4]/35 text-base max-w-lg mx-auto">
          Кейсы и отзывы из реальных проектов
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="glass-card p-8 scroll-reveal relative group"
          :data-reveal-delay="index * 150"
        >
          <!-- Quote icon -->
          <div class="text-[#0AA5FF]/20 text-5xl font-serif leading-none mb-4 group-hover:text-[#0AA5FF]/40 transition-colors">"</div>

          <p class="text-[#EDE8D4]/70 text-[15px] leading-relaxed mb-8 font-light">
            {{ review.text }}
          </p>

          <!-- Metrics -->
          <div v-if="review.metric" class="mb-6 p-4 rounded-2xl bg-[#0AA5FF]/5 border border-[#0AA5FF]/10">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[#EDE8D4]/50 text-xs uppercase tracking-wider">{{ review.metricLabel }}</span>
              <span class="text-[#0AA5FF] text-sm font-bold">{{ review.metric }}</span>
            </div>
            <div class="w-full h-1.5 bg-[#090909] rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-[#0AA5FF] to-[#6C5CE7] rounded-full transition-all duration-1000"
                :style="{ width: review.metricWidth }"
              ></div>
            </div>
          </div>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#0AA5FF]/30 to-[#6C5CE7]/30 flex items-center justify-center text-[#EDE8D4] text-sm font-bold">
              {{ review.initials }}
            </div>
            <div>
              <div class="text-[#EDE8D4] text-sm font-medium">{{ review.name }}</div>
              <div class="text-[#EDE8D4]/30 text-xs">{{ review.role }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Bar -->
      <div class="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 scroll-reveal">
        <div v-for="stat in trustStats" :key="stat.label" class="text-center">
          <div class="text-2xl md:text-3xl font-black text-[#EDE8D4] mb-1">{{ stat.value }}</div>
          <div class="text-[#EDE8D4]/30 text-xs uppercase tracking-wider">{{ stat.label }}</div>
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

const reviews = [
  {
    text: 'После запуска нового лендинга конверсия из Telegram выросла в 3 раза. Сайт окупился за первую неделю. Рекомендую всем, кто хочет результат, а не просто «красивый дизайн».',
    metric: '+320%',
    metricLabel: 'Рост конверсии',
    metricWidth: '85%',
    name: 'Андрей М.',
    initials: 'АМ',
    role: 'HR-агентство, Москва',
  },
  {
    text: 'Получил готовый лендинг за 2 дня. Дизайн агрессивный, цепляющий — именно то, что нужно для моей ниши. CTR по TG-рекламе превысил 38%.',
    metric: '38% CTR',
    metricLabel: 'Telegram Ads',
    metricWidth: '92%',
    name: 'Дмитрий К.',
    initials: 'ДК',
    role: 'Строительная компания',
  },
  {
    text: 'Идеальное соотношение цена/качество. Прототип за 6 часов, готовый продукт за 48 часов. Работал с 5 студиями до этого — здесь лучший результат.',
    metric: null,
    metricLabel: '',
    metricWidth: '0%',
    name: 'Елена В.',
    initials: 'ЕВ',
    role: 'Инфобизнес',
  },
]

const trustStats = [
  { value: '50+', label: 'проектов' },
  { value: '98%', label: 'довольных клиентов' },
  { value: '48ч', label: 'средний срок' },
  { value: '4.9★', label: 'рейтинг' },
]
</script>
