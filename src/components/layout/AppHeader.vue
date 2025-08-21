<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  activeSection: string
}

interface Emits {
  scrollToSection: [sectionId: string]
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleScrollToSection = (sectionId: string) => {
  emit('scrollToSection', sectionId)
}

const isActive = (section: string) => {
  return props.activeSection === section
}
</script>

<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-brand">
        <h2>Portfólio</h2>
      </div>
      <ul class="nav-menu">
        <li>
          <a 
            href="#home" 
            @click="handleScrollToSection('home')" 
            :class="{ active: isActive('home') }"
          >
            Início
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            @click="handleScrollToSection('about')" 
            :class="{ active: isActive('about') }"
          >
            Sobre
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            @click="handleScrollToSection('projects')" 
            :class="{ active: isActive('projects') }"
          >
            Projetos
          </a>
        </li>
        <li>
          <a 
            href="#technologies" 
            @click="handleScrollToSection('technologies')" 
            :class="{ active: isActive('technologies') }"
          >
            Tecnologias
          </a>
        </li>
        <li>
          <a 
            href="#experience" 
            @click="handleScrollToSection('experience')" 
            :class="{ active: isActive('experience') }"
          >
            Experiência
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            @click="handleScrollToSection('contact')" 
            :class="{ active: isActive('contact') }"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  border-bottom: 1px solid #333;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand h2 {
  color: #ffd700;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-menu a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  position: relative;
}

.nav-menu a:hover {
  color: #ffd700;
  background: rgba(255, 215, 0, 0.1);
}

.nav-menu a.active {
  color: #ffd700;
  background: rgba(255, 215, 0, 0.2);
}

.nav-menu a.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: #ffd700;
  border-radius: 1px;
}

@media (max-width: 768px) {
  .nav {
    padding: 0 1rem;
  }
  
  .nav-menu {
    gap: 1rem;
  }
  
  .nav-menu a {
    padding: 0.3rem 0.5rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .nav-brand h2 {
    font-size: 1.2rem;
  }
  
  .nav-menu {
    gap: 0.5rem;
  }
  
  .nav-menu a {
    padding: 0.2rem 0.3rem;
    font-size: 0.8rem;
  }
}
</style>