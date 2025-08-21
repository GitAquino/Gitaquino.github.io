<script setup lang="ts">
interface Experience {
  id: number
  period: string
  position: string
  company: string
  description: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    period: '2024 - Presente',
    position: 'Analista de Sistemas',
    company: 'Rede Market (Multi Angra) ',
    description: 'Responsável pela sustentação, implantação e integração de sistemas com o ERP TOTVS Consinco, análise e tratamento de dados, desenvolvimento de aplicações e automações, análise e tratativa de incidentes (N2)',
    responsibilities: [
      'Sustentação ERP TOTVS Consinco',
      'Otimização de performance de aplicações e fluxos',
      'Integração com serviços de terceiros',
      'Administração PL/SQL',
      'Automações utilizando Python e Power Automate'
    ]
  },
  {
    id: 2,
    period: '2024 - 2024',
    position: 'Freelancer - Desenvolvedor de Software',
    company: 'Pacsoft Serviços',
    description: 'Criação de portal interno para gerenciamento de serviços e clientes.',
    responsibilities: [
      'Desenvolvimento com Vue.js e Java',
      'Implementação de autenticação JWT',
      'Postgres, Docker',
      'Kanban, Scrum'
    ]
  },
  {
    id: 3,
    period: '2022 - 2023',
    position: 'Estagiário',
    company: 'Boa Vista Serviços SA',
    description: 'Início da carreira profissional realizando sustentação e customização do CRM Salesforce.',
    responsibilities: [
      'CRM Salesforce',
      'Vue.js, Java',
      'SQL Server, Power BI'     
    ]
  }
]
</script>

<template>
  <section id="experience" class="experience">
    <div class="container">
      <h2 class="section-title">Minha <span class="highlight">Experiência</span></h2>
      <div class="timeline">
        <div v-for="exp in experiences" :key="exp.id" class="timeline-item">
          <div class="timeline-date">{{ exp.period }}</div>
          <div class="timeline-content">
            <h3>{{ exp.position }}</h3>
            <h4>{{ exp.company }}</h4>
            <p>{{ exp.description }}</p>
            <ul>
              <li v-for="responsibility in exp.responsibilities" :key="responsibility">
                {{ responsibility }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
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

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #ffd700;
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  margin-bottom: 3rem;
  position: relative;
}

.timeline-item:nth-child(odd) {
  flex-direction: row;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 20px;
  width: 15px;
  height: 15px;
  background: #ffd700;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-date {
  flex: 1;
  padding: 1rem;
  text-align: center;
  color: #ffd700;
  font-weight: 600;
  font-size: 1.1rem;
}

.timeline-content {
  flex: 1;
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #333;
  margin: 0 1rem;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  border-color: #ffd700;
  box-shadow: 0 5px 20px rgba(255, 215, 0, 0.1);
}

.timeline-content h3 {
  color: #ffd700;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.timeline-content h4 {
  color: #ccc;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
}

.timeline-content p {
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-content ul {
  list-style: none;
  padding: 0;
}

.timeline-content li {
  color: #ccc;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.timeline-content li::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: #ffd700;
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    flex-direction: column !important;
  }
  
  .timeline-item::before {
    left: 20px;
    transform: none;
  }
  
  .timeline-date {
    flex: none;
    text-align: left;
    padding: 0.5rem 0;
  }
  
  .timeline-content {
    margin: 0 0 0 2rem;
  }
}

@media (max-width: 480px) {
  .experience {
    padding: 3rem 0;
  }
  
  .timeline-content {
    padding: 1.5rem;
  }
}</style>