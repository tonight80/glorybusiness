<template>
  <section
    class="relative min-h-screen flex items-center pt-24 sm:pt-32 pb-12 px-6 md:px-12 overflow-hidden bg-[#090909]">

    <div
      class="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#0AA5FF]/10 blur-[120px] rounded-full pointer-events-none">
    </div>

    <div class="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
      <div class="max-w-2xl">
        <h1
          class="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.15] mb-6 sm:mb-8 text-[#EDE8D4] tracking-tight">
          Качественный подход <br />

          к разработке ваших <br />

          проектов
        </h1>

        <p class="text-[16px] sm:text-[17px] leading-relaxed mb-10 sm:mb-12 max-w-xl text-[#EDE8D4]/50 font-light">
          Я предоставляю не только собственное дизайн агентство, <br />

          а так же сотрудничаю с
          <span class="text-[#0AA5FF] font-medium">full stack разработчиками</span> и дизайнерами
          разных сфер
        </p>
        <div class="flex items-center gap-4 sm:gap-5 flex-wrap">
          <a href="https://t.me/causeiknowu" class="btn-primary w-full sm:w-auto text-center">
            Бесплатный разбор сайта
          </a>
          <a href="https://t.me/causeiknowu" class="btn-secondary w-full sm:w-auto justify-center">
            <TelegramIcon class="w-[18px] h-[18px] shrink-0 text-[#0AA5FF]" />
            <span class="text-[#EDE8D4]/80 leading-none">@causeiknowu</span>
          </a>
        </div>
      </div>

      <div class="relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
        <img src="@/assets/icon/HeroImage.webp" alt="GB Logo"
          class="w-2/3 sm:w-full max-w-[400px] lg:max-w-[500px] object-contain drop-shadow-[0_0_30px_rgba(10,165,255,0.2)] animate-float" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TelegramIcon from './TelegramIcon.vue';
</script>

<style scoped>
@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.btn-primary {
  @apply px-10 py-4 rounded-2xl text-[15px] font-semibold transition-all duration-300;
  background: #ede8d4;
  /* Ваш основной цвет для главной кнопки */
  color: #090909;
}

.btn-primary:hover {
  background: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(237, 232, 212, 0.2);
}

.btn-secondary {
  @apply inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-[15px] font-medium transition-all;
  background: rgba(10, 165, 255, 0.05);
  border: 1px solid rgba(10, 165, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(10, 165, 255, 0.1);
  border-color: #0aa5ff;
}
</style>
