<template>
  <section class="relative py-24 px-6 md:px-12 bg-[#090909]">
    <div class="max-w-7xl mx-auto">
      <div class="offer-container group">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div>
            <div
              class="inline-block px-4 py-1 rounded-full bg-[#0AA5FF]/10 border border-[#0AA5FF]/20 text-[#0AA5FF] text-xs font-medium mb-6 uppercase tracking-widest">
              Limited Offer
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-[#EDE8D4] mb-6 leading-tight">
              Продающий лендинг <br>
              <span class="text-[#0AA5FF]">за 48 часов</span>
            </h2>
            <p class="text-[#EDE8D4]/60 text-lg mb-10 max-w-md font-light leading-relaxed">
              Не шаблон, а индивидуальный инструмент под вашу нишу. Сразу готов к трафику.
            </p>

            <div class="price-block">
              <div class="flex items-baseline gap-3">
                <h2 class="text-5xl font-black text-[#EDE8D4]">30 000 ₽</h2>
                <span class="text-[#0AA5FF] font-mono">/ фикс</span>
              </div>
              <p class="text-[#EDE8D4]/40 text-sm mt-2">без скрытых платежей и доплат</p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 mt-12">
              <a href="#" class="btn-primary-glow">
                Открыть полную оферту (PDF)
              </a>
              <a href="#" class="btn-secondary-outline">
                Ссылка на оплату
              </a>
            </div>

            <p class="text-[#EDE8D4]/30 text-[12px] mt-6 italic">
              * Оферта и ссылка на оплату генерируются индивидуально после обсуждения в Telegram.
            </p>
          </div>

          <div class="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-xl">
            <h3 class="text-[#EDE8D4] text-xl font-semibold mb-8 flex items-center gap-3">
              <span class="w-2 h-2 bg-[#0AA5FF] rounded-full animate-pulse"></span>
              Что входит в стоимость:
            </h3>
            <ul class="space-y-6">
              <li v-for="(item, index) in list" :key="index" class="flex items-start gap-4 group/item">
                <div
                  class="mt-1.5 w-5 h-5 flex-shrink-0 rounded-full border border-[#0AA5FF]/40 flex items-center justify-center group-hover/item:border-[#0AA5FF] transition-colors">
                  <div class="w-1.5 h-1.5 bg-[#0AA5FF] rounded-full"></div>
                </div>
                <span
                  class="text-[#EDE8D4]/80 text-base leading-snug group-hover/item:text-[#EDE8D4] transition-colors">
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div
          class="absolute -top-20 -right-20 w-64 h-64 bg-[#0AA5FF]/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#0AA5FF]/20 transition-all duration-700">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const list = [
  "Анализ ниши и прототип за 6 часов",
  "Агрессивный дизайн с конверсионными элементами",
  "Чистая вёрстка, адаптив под все устройства",
  "Подключение аналитики и метрик",
  "Базовая SEO-оптимизация",
  "Гарантия 14 дней на правки"
]
</script>

<style scoped>
.offer-container {
  @apply relative overflow-hidden p-8 md:p-16 rounded-[40px] transition-all duration-500;
  background: linear-gradient(145deg, rgba(237, 232, 212, 0.05) 0%, rgba(9, 9, 9, 1) 100%);
  border: 1px solid rgba(237, 232, 212, 0.1);
}

.offer-container:hover {
  border-color: rgba(10, 165, 255, 0.3);
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.5);
}

.btn-primary-glow {
  @apply px-8 py-4 rounded-2xl text-[14px] font-bold uppercase tracking-wider transition-all duration-300 text-center;
  background: #EDE8D4;
  color: #090909;
  box-shadow: 0 0 0 rgba(237, 232, 212, 0);
}

.btn-primary-glow:hover {
  background: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(237, 232, 212, 0.15);
}

.btn-secondary-outline {
  @apply px-8 py-4 rounded-2xl text-[14px] font-bold uppercase tracking-wider transition-all duration-300 border border-[#EDE8D4]/20 text-[#EDE8D4] text-center;
  backdrop-filter: blur(10px);
}

.btn-secondary-outline:hover {
  background: rgba(237, 232, 212, 0.05);
  border-color: #EDE8D4;
  transform: translateY(-2px);
}

.price-block {
  @apply inline-block p-6 rounded-3xl border border-white/5 bg-white/[0.02];
}
</style>