<script setup lang="ts">
// Componente About não precisa de lógica específica por enquanto
</script>

<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">Sobre <span class="highlight">Mim</span></h2>
      <div class="about-content">
        <div class="about-text">
          <p>Sou um analista e desenvolvedor de software e sistemas apaixonado por tecnologia e inovação. Com experiência ERP TOTVS, CRM Salesforce, desenvolvimento de aplicações e funcionalidades web, busco sempre criar soluções que façam a diferença na vida das pessoas.</p>
          <p>Minha jornada na programação começou há alguns anos e desde então venho me dedicando a aprender novas tecnologias e aprimorar minhas habilidades constantemente.</p>
          <div class="stats">
            <div class="stat">
              <h3 class="highlight">3+</h3>
              <p>Anos de Experiência</p>
            </div>
            <div class="stat">
              <h3 class="highlight">10+</h3>
              <p>Projetos Concluídos</p>
            </div>
            <div class="stat">
              <h3 class="highlight">100%</h3>
              <p>Dedicação</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
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

.about-content {
  display: flex;
  justify-content: center;
}

.about-text {
  max-width: 800px;
  text-align: center;
}

.about-text p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 2rem;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
}

.stat {
  text-align: center;
}

.stat h3 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.stat p {
  color: #ccc;
  font-size: 1rem;
  margin: 0;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .about-text p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 3rem 0;
  }
  
  .stat h3 {
    font-size: 2rem;
  }
}</style>