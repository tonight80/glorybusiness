<template>
  <section id="offer" ref="sectionRef" class="relative py-24 px-6 md:px-12 bg-[#090909]">
    <div class="max-w-7xl mx-auto">
      <div class="offer-container shimmer-border group scroll-reveal-scale">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">

          <div>
            <div
              class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0AA5FF]/8 border border-[#0AA5FF]/20 mb-6"
            >
              <span class="w-1.5 h-1.5 bg-[#0AA5FF] rounded-full animate-pulse"></span>
              <span class="text-[#0AA5FF] text-xs font-semibold uppercase tracking-widest">Limited Offer</span>
            </div>

            <h2 class="text-4xl md:text-5xl font-bold text-[#EDE8D4] mb-6 leading-tight">
              Продающий лендинг<br />
              <span class="gradient-text-static">за 48 часов</span>
            </h2>

            <p class="text-[#EDE8D4]/50 text-lg mb-10 max-w-md font-light leading-relaxed">
              Не шаблон, а индивидуальный инструмент под вашу нишу. Сразу готов к трафику.
            </p>

            <!-- Price -->
            <div class="price-block">
              <div class="flex items-baseline gap-3">
                <h2 class="text-5xl font-black text-[#EDE8D4]">30 000 ₽</h2>
                <span class="text-[#0AA5FF] font-mono">/ фикс</span>
              </div>
              <p class="text-[#EDE8D4]/35 text-sm mt-2">без скрытых платежей и доплат</p>
            </div>

            <!-- Urgency -->
            <div class="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/8 border border-orange-500/20">
              <span class="text-orange-400 text-sm">🔥</span>
              <span class="text-orange-400/90 text-sm font-medium">Осталось {{ slotsLeft }} мест в этом месяце</span>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 mt-10">
              <a href="https://t.me/causeiknowu" class="btn-glow text-center">
                Открыть полную оферту (PDF)
              </a>
              <a href="https://t.me/causeiknowu" class="btn-outline text-center justify-center">
                Ссылка на оплату
              </a>
            </div>

            <p class="text-[#EDE8D4]/25 text-[12px] mt-6 italic">
              * Оферта и ссылка на оплату генерируются индивидуально после обсуждения в Telegram.
            </p>
          </div>

          <!-- What's included -->
          <div class="included-card">
            <h3 class="text-[#EDE8D4] text-xl font-semibold mb-8 flex items-center gap-3">
              <span class="w-2 h-2 bg-[#0AA5FF] rounded-full animate-pulse"></span>
              Что входит в стоимость:
            </h3>

            <ul class="space-y-5">
              <li
                v-for="(item, index) in list"
                :key="index"
                class="flex items-start gap-4 group/item"
              >
                <div class="mt-1 w-6 h-6 flex-shrink-0 rounded-full border border-[#0AA5FF]/30 flex items-center justify-center group-hover/item:border-[#0AA5FF] group-hover/item:bg-[#0AA5FF]/10 transition-all duration-300">
                  <svg class="w-3 h-3 text-[#0AA5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-[#EDE8D4]/75 text-[15px] leading-snug group-hover/item:text-[#EDE8D4] transition-colors duration-300">
                  {{ item }}
                </span>
              </li>
            </ul>

            <!-- Bonus badge -->
            <div class="mt-8 p-4 rounded-2xl bg-gradient-to-r from-[#0AA5FF]/5 to-[#6C5CE7]/5 border border-[#0AA5FF]/10">
              <div class="flex items-center gap-3">
                <span class="text-xl">🎁</span>
                <div>
                  <div class="text-[#EDE8D4] text-sm font-semibold">Бонус при заказе сегодня</div>
                  <div class="text-[#EDE8D4]/40 text-xs mt-0.5">Бесплатная настройка Telegram-бота для заявок</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Ambient glow -->
        <div class="absolute -top-24 -right-24 w-72 h-72 bg-[#0AA5FF]/8 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#0AA5FF]/15 transition-all duration-700"></div>
        <div class="absolute -bottom-16 -left-16 w-48 h-48 bg-[#6C5CE7]/5 blur-[80px] rounded-full pointer-events-none"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { staggerDelay: 0 })

const slotsLeft = ref(3)

const list = [
  'Анализ ниши и прототип за 6 часов',
  'Агрессивный дизайн с конверсионными элементами',
  'Чистая вёрстка, адаптив под все устройства',
  'Подключение аналитики и метрик',
  'Базовая SEO-оптимизация',
  'Гарантия 14 дней на правки',
]
</script>

<style scoped>
.offer-container {
  @apply relative overflow-hidden p-8 md:p-16 rounded-[40px] transition-all duration-500;
  background: linear-gradient(145deg, rgba(237, 232, 212, 0.04) 0%, rgba(9, 9, 9, 1) 100%);
  border: 1px solid rgba(237, 232, 212, 0.08);
}

.offer-container:hover {
  border-color: rgba(10, 165, 255, 0.25);
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.5), 0 0 50px rgba(10, 165, 255, 0.05);
}

.price-block {
  @apply inline-block p-6 rounded-3xl;
  background: rgba(237, 232, 212, 0.02);
  border: 1px solid rgba(237, 232, 212, 0.06);
}

.included-card {
  @apply p-8 md:p-10 rounded-3xl;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
}
</style>