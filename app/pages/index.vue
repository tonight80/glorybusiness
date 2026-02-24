<template>
  <div class="bg-[#090909] min-h-screen">
    <Header />
    <main>
      <HeroSection />
      <PrivilegesCard />
      <SocialProof />
      <HowItsWorks />
      <OfferCard />
      <FaqSection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'glorybusiness — Продающий лендинг за 48 часов | Дизайн агентство',
  meta: [
    {
      name: 'description',
      content:
        'Индивидуальный лендинг за 48 часов от 30 000 ₽. Рост конверсии до 200%, CTR до 40%. Анализ ниши, агрессивный дизайн, адаптив и аналитика под ключ.',
    },
    {
      property: 'og:title',
      content: 'glorybusiness — Продающий лендинг за 48 часов',
    },
    {
      property: 'og:description',
      content: 'Индивидуальный лендинг за 48 часов. Без шаблонов, сразу готов к трафику.',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ],
  htmlAttrs: { lang: 'ru' },
})
</script>