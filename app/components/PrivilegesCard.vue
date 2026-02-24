<template>
  <section id="privileges" ref="sectionRef" class="relative py-20 px-6 md:px-12 bg-[#090909]">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-[#EDE8D4] mb-4 scroll-reveal">
        Почему выбирают <span class="text-[#0AA5FF]">нас</span>
      </h2>
      <p class="text-[#EDE8D4]/35 text-base mb-12 max-w-lg scroll-reveal">
        Цифры, которые говорят сами за себя
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="glass-card glow-border group p-6 md:p-8 scroll-reveal"
          :data-reveal-delay="index * 120"
        >
          <!-- Icon -->
          <div class="w-12 h-12 rounded-2xl bg-[#0AA5FF]/8 border border-[#0AA5FF]/15 flex items-center justify-center mb-5 group-hover:bg-[#0AA5FF]/15 group-hover:border-[#0AA5FF]/30 transition-all duration-300">
            <span class="text-2xl">{{ item.icon }}</span>
          </div>

          <!-- Metric -->
          <div class="text-3xl md:text-4xl font-black text-[#0AA5FF] mb-2 tracking-tight transition-all duration-300 group-hover:scale-105 origin-left">
            <span ref="counterRefs" :data-target="item.title">{{ item.title }}</span>
          </div>

          <!-- Description -->
          <div class="text-[#EDE8D4]/50 text-sm md:text-[15px] font-light leading-snug group-hover:text-[#EDE8D4]/80 transition-colors duration-300">
            {{ item.description }}
          </div>

          <!-- Bottom accent line -->
          <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0AA5FF] via-[#0AA5FF]/50 to-transparent transition-all duration-500 group-hover:w-full"></div>
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
  { icon: '🚀', title: '+70-200%', description: 'рост конверсии в нишах hr/стройка' },
  { icon: '📊', title: '> 40% CTR', description: 'на TG-кампаниях (при среднем 1-3%)' },
  { icon: '⚡', title: '48 часов', description: 'от брифа до готового к трафику лендинга' },
  { icon: '💎', title: '30 000 ₽', description: 'фиксированная цена под ключ' },
]
</script>