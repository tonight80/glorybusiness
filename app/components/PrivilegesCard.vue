<template>
  <section class="relative py-12 px-6 md:px-12 bg-[#090909]">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div v-for="(item, index) in list" :key="index" class="privilege-card group">
          <div class="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
            <div class="w-1.5 h-1.5 bg-[#0AA5FF] rounded-full"></div>
          </div>

          <div
            class="text-3xl md:text-4xl font-black text-[#0AA5FF] mb-2 tracking-tight transition-transform duration-300 group-hover:scale-105 origin-left">
            {{ item.title }}
          </div>

          <div
            class="text-[#EDE8D4]/60 text-sm md:text-base font-light leading-snug group-hover:text-[#EDE8D4]/90 transition-colors">
            {{ item.description }}
          </div>

          <div
            class="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-[#0AA5FF] to-transparent transition-all duration-500 group-hover:w-full">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const list = [
  { title: "+70-200%", description: "рост конверсии в нишах hr/стройка" },
  { title: "> 40% CTR", description: "на TG-кампаниях (при среднем 1-3%)" },
  { title: "48 часов", description: "от брифа до готового к трафику лендинга" },
  { title: "30 000 ₽", description: "фиксированная цена под ключ" }
]
</script>

<style scoped>
.privilege-card {
  @apply relative p-6 md:p-8 rounded-2xl overflow-hidden transition-all duration-300;
  /* Мягкий фон, как на ваших фото */
  background: rgba(237, 232, 212, 0.02);
  border: 1px solid rgba(237, 232, 212, 0.05);
}

.privilege-card:hover {
  background: rgba(10, 165, 255, 0.03);
  border-color: rgba(10, 165, 255, 0.2);
  transform: translateY(-4px);
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.5);
}

/* Добавляем небольшое свечение тексту при наведении */
.privilege-card:hover .text-3xl {
  text-shadow: 0 0 20px rgba(10, 165, 255, 0.4);
}
</style>