<script setup lang="ts">
interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  projectLink?: string
  githubLink?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Projeto Locadora de carros',
    description: 'Plataforma de aluguel de veículos com sistema de reserva e pagamento.',
    image: '🚀',
    technologies: ['Java', 'SpringBoot', 'API RestFull', 'Docker', 'PostgreSQL'],
    projectLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'App Mobile',
    description: 'Aplicativo mobile para gerenciamento de tarefas com sincronização em tempo real.',
    image: '📱',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    projectLink: '#',
    githubLink: '#https://github.com/Ednaxx/locadora-de-veiculos-solutis'
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para análise de dados com gráficos e relatórios em tempo real.',
    image: '🌐',
    technologies: ['React', 'D3.js', 'Python'],
    projectLink: '#',
    githubLink: '#'
  }
]
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">Meus <span class="highlight">Projetos</span></h2>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-image">{{ project.image }}</div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
          <div class="project-links">
            <a v-if="project.projectLink" :href="project.projectLink" class="project-link">Ver Projeto</a>
            <a v-if="project.githubLink" :href="project.githubLink" class="project-link">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 5rem 0;
  background: #0a0a0a;
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid #333;
  transition: all 0.3s ease;
  text-align: center;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: #ffd700;
  box-shadow: 0 10px 30px rgba(255, 215, 0, 0.2);
}

.project-image {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.project-card h3 {
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.project-card p {
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.project-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.project-link {
  color: #ffd700;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #ffd700;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.project-link:hover {
  background: #ffd700;
  color: #000;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-card {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .projects {
    padding: 3rem 0;
  }
  
  .project-image {
    font-size: 3rem;
  }
  
  .project-links {
    flex-direction: column;
    align-items: center;
  }
}</style>