<template>
  <section id="faq" ref="sectionRef" class="relative py-24 px-6 md:px-12 bg-[#090909] overflow-hidden">
    <!-- Ambient glow -->
    <div class="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#0AA5FF]/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="max-w-3xl mx-auto relative z-10">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="text-4xl md:text-5xl font-bold text-[#EDE8D4] mb-4 tracking-tight">
          Частые <span class="gradient-text-static">вопросы</span>
        </h2>
        <p class="text-[#EDE8D4]/35 text-base max-w-lg mx-auto">
          Всё, что нужно знать перед заказом
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="faq-card scroll-reveal"
          :data-reveal-delay="index * 100"
        >
          <button
            class="w-full flex items-center justify-between p-6 text-left group"
            @click="toggleItem(index)"
          >
            <span class="text-[#EDE8D4] text-[15px] sm:text-base font-medium pr-4 group-hover:text-[#0AA5FF] transition-colors duration-300">
              {{ item.question }}
            </span>
            <div
              :class="[
                'w-8 h-8 flex-shrink-0 rounded-xl border flex items-center justify-center transition-all duration-400',
                openIndex === index
                  ? 'border-[#0AA5FF]/40 bg-[#0AA5FF]/10 rotate-45'
                  : 'border-[#EDE8D4]/10 bg-white/5 rotate-0'
              ]"
            >
              <svg class="w-4 h-4 text-[#0AA5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </button>

          <Transition name="accordion">
            <div v-if="openIndex === index" class="px-6 pb-6">
              <p class="text-[#EDE8D4]/50 text-[15px] leading-relaxed font-light">
                {{ item.answer }}
              </p>
            </div>
          </Transition>
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

const openIndex = ref<number | null>(null)

function toggleItem(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

const faqItems = [
  {
    question: 'Сколько стоит лендинг?',
    answer: 'Фиксированная цена — 30 000 ₽ под ключ. Без скрытых доплат. В стоимость входит: анализ ниши, дизайн, вёрстка, адаптив, аналитика и SEO. Точная оферта формируется индивидуально.',
  },
  {
    question: 'Какие сроки?',
    answer: 'От брифа до готового лендинга — 48 часов. Прототип готов через 6 часов после обсуждения деталей. Это реальные сроки, а не маркетинговое обещание.',
  },
  {
    question: 'Вы используете шаблоны?',
    answer: 'Нет. Каждый лендинг создаётся с нуля под конкретную нишу, аудиторию и задачу. Шаблоны не дают конверсию — мы делаем индивидуальные инструменты.',
  },
  {
    question: 'Что если мне не понравится?',
    answer: 'Гарантия правок 14 дней. Если результат категорически не устраивает и мы не можем найти решение — возвращаем оплату. Но такого ещё не было.',
  },
  {
    question: 'С какими нишами вы работаете?',
    answer: 'Основной фокус — HR, строительство, инфобизнес и услуги. Но опыт есть в десятках разных ниш. Напишите в Telegram — обсудим вашу задачу.',
  },
  {
    question: 'Как происходит оплата?',
    answer: 'После обсуждения деталей в Telegram я отправляю индивидуальную оферту в PDF и ссылку на оплату. Полная предоплата — и мы стартуем.',
  },
]
</script>

<style scoped>
.faq-card {
  @apply rounded-2xl overflow-hidden transition-all duration-300;
  background: rgba(237, 232, 212, 0.02);
  border: 1px solid rgba(237, 232, 212, 0.06);
}

.faq-card:hover {
  background: rgba(237, 232, 212, 0.03);
  border-color: rgba(10, 165, 255, 0.15);
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  max-height: 200px;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
  padding-bottom: 0;
}
</style>
