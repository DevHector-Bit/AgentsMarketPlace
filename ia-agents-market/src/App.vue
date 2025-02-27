<script setup lang="ts">
import HeroSection from "./components/HeroSection.vue";
import TrendingAgents from "./components/TrendingAgents.vue";
import TopAgents from "./components/TopAgents.vue";
import Categories from "./components/Categories.vue";
import FeaturedAgents from "./components/FeaturedAgents.vue";
import Newsletter from "./components/Newsletter.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main class="">
    <HeroSection />
    <TrendingAgents />
    <TopAgents />
    <Categories />
    <FeaturedAgents />
    <Newsletter />
    <Footer />
  </main>
</template>

<style scoped>
agents-marketplace {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
}
</style>
