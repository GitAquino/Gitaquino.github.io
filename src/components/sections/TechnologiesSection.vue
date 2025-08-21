<script setup lang="ts">
interface TechCategory {
  title: string
  technologies: string[]
}

const techCategories: TechCategory[] = [
  {
    title: 'Frontend',
    technologies: ['Vue.js', 'TypeScript', 'Flutter', 'HTML5', 'CSS3']
  },
  {
    title: 'Backend',
    technologies: ['Java', 'Python', 'Laravel', 'PostgreSQL', 'PLSQL']
  },
  {
    title: 'Ferramentas',
    technologies:  ['ERP TOTVS', 'CRM Salesforce', 'Git', 'Docker', 'AWS']
  }
]
</script>

<template>
  <section id="technologies" class="technologies">
    <div class="container">
      <h2 class="section-title">Minhas <span class="highlight">Tecnologias</span></h2>
      <div class="tech-categories">
        <div v-for="category in techCategories" :key="category.title" class="tech-category">
          <h3>{{ category.title }}</h3>
          <div class="tech-items">
            <div v-for="tech in category.technologies" :key="tech" class="tech-item">
              {{ tech }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.technologies {
  padding: 5rem 0;
  background: #111;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #fff;
  font-weight: 700;
}

.highlight {
  color: #ffd700;
}

.tech-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tech-category {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid #333;
  text-align: center;
  transition: all 0.3s ease;
}

.tech-category:hover {
  transform: translateY(-5px);
  border-color: #ffd700;
  box-shadow: 0 10px 30px rgba(255, 215, 0, 0.1);
}

.tech-category h3 {
  color: #ffd700;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.tech-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
}

.tech-item {
  background: rgba(255, 215, 0, 0.1);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 215, 0, 0.3);
  transition: all 0.3s ease;
  cursor: default;
}

.tech-item:hover {
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
  border-color: #ffd700;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .tech-categories {
    grid-template-columns: 1fr;
  }
  
  .tech-category {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .technologies {
    padding: 3rem 0;
  }
  
  .tech-item {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}</style>