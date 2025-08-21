<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import Home from '@/views/Home.vue'
import { useScroll } from '@/composables/useScroll'
import '@/assets/styles/global.css'

const { activeSection, scrollToSection } = useScroll()
</script>

<template>
  <div id="app">
    <AppHeader :active-section="activeSection" @scroll-to-section="scrollToSection" />
    <Home />
    <AppFooter @scroll-to-section="scrollToSection" />
  </div>
</template>

<style>
/* Estilos específicos do App.vue se necessário */
</style>
