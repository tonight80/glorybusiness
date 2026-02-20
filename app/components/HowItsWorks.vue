<template>
  <section class="relative py-24 px-6 md:px-12 bg-[#090909] overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold text-[#EDE8D4] mb-16 tracking-tight">
        Как это работает
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="item in list" :key="item.position" class="step-card group">
          <div class="step-number">
            {{ item.position }}
          </div>

          <h3 class="text-xl font-bold text-[#EDE8D4] mb-4 group-hover:text-[#0AA5FF] transition-colors duration-300">
            {{ item.title }}
          </h3>

          <p class="text-[#EDE8D4]/40 leading-relaxed font-light text-[16px] relative z-10">
            {{ item.description }}
          </p>

          <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0AA5FF] transition-all duration-500 group-hover:w-full">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const list = [
  { position: "01", title: "Вы пишете в ТГ", description: "Привет, нужен сайт. Я отправляю ссылку на этот сайт как подтверждение экспертизы." },
  { position: "02", title: "Обсуждаем детали", description: "Уточняем нишу, цели, боли. Я отправляю индивидуальную оферту в PDF." },
  { position: "03", title: "Оплата и старт", description: "После оплаты по ссылке начинаем работу. Через 48 часов у вас готовый инструмент." }
]
</script>

<style scoped>
.step-card {
  @apply relative p-10 rounded-[40px] overflow-hidden transition-all duration-500;
  background: rgba(237, 232, 212, 0.02);
  border: 1px solid rgba(237, 232, 212, 0.08);
  backdrop-filter: blur(10px);
}

.step-card:hover {
  background: rgba(237, 232, 212, 0.04);
  border-color: rgba(10, 165, 255, 0.3);
  transform: translateY(-10px);
  box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.6);
}

.step-number {
  @apply w-12 h-12 flex items-center justify-center rounded-xl mb-8 text-[13px] font-mono font-bold relative z-10;
  background: rgba(10, 165, 255, 0.1);
  color: #0AA5FF;
  border: 1px solid rgba(10, 165, 255, 0.2);
}
</style>