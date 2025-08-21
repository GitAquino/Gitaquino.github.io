<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import TechnologiesSection from '@/components/sections/TechnologiesSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { useScroll } from '@/composables/useScroll'

const { scrollToSection } = useScroll()
</script>

<template>
  <main>
    <HeroSection @scroll-to-section="scrollToSection" />
    <AboutSection />
    <ProjectsSection />
    <TechnologiesSection />
    <ExperienceSection />
    <ContactSection />
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
}
</style>