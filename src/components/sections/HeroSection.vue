<script setup lang="ts">
interface Emits {
  scrollToSection: [sectionId: string]
}

const emit = defineEmits<Emits>()

const handleScrollToProjects = () => {
  emit('scrollToSection', 'projects')
}
</script>

<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Olá, eu sou <span class="highlight">Clodualdo Junior</span></h1>
      <p class="hero-subtitle">Criando soluções digitais inovadoras com paixão e dedicação</p>
      <button class="cta-button" @click="handleScrollToProjects">Ver Projetos</button>
    </div>
    <div class="hero-image">
      <img src="@/assets/images/1734711440425.jpg" alt="Clodualdo Junior" class="profile-image" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4rem;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
  line-height: 1.2;
}

.highlight {
  color: #ffd700;
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #ffd700, #ffed4e);
  border-radius: 2px;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #ccc;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.cta-button {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  color: #000;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
  background: linear-gradient(135deg, #ffed4e, #ffd700);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 3px solid #ffd700;
  box-shadow: 0 10px 30px rgba(255, 215, 0, 0.2);
  transition: all 0.3s ease;
  object-fit: cover;
}

.profile-image:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(255, 215, 0, 0.3);
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .profile-image {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .cta-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}
</style>