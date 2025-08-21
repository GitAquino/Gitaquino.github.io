<script setup lang="ts">
interface ContactInfo {
  icon: string
  title: string
  value: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: '📧',
    title: 'Email',
    value: 'clodualdoaquino@hotmail.com'
  },
  {
    icon: '📱',
    title: 'Telefone',
    value: '+55 (24) 99850-3702'
  },
  {
    icon: '📍',
    title: 'Localização',
    value: 'Angra dos Reis, RJ - Brasil'
  }
]
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Entre em <span class="highlight">Contato</span></h2>
      <p class="contact-subtitle">Vamos conversar sobre seu próximo projeto!</p>
      <div class="contact-content">
        <div class="contact-info">
          <div v-for="info in contactInfo" :key="info.title" class="contact-item">
            <span class="contact-icon">{{ info.icon }}</span>
            <div>
              <h4>{{ info.title }}</h4>
              <p>{{ info.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
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
  margin-bottom: 1rem;
  color: #fff;
  font-weight: 700;
}

.highlight {
  color: #ffd700;
}

.contact-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 3rem;
}

.contact-content {
  display: flex;
  justify-content: center;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 800px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-5px);
  border-color: #ffd700;
  box-shadow: 0 10px 30px rgba(255, 215, 0, 0.1);
}

.contact-icon {
  font-size: 2rem;
  background: rgba(255, 215, 0, 0.1);
  padding: 1rem;
  border-radius: 50%;
  border: 2px solid rgba(255, 215, 0, 0.3);
}

.contact-item h4 {
  color: #ffd700;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.contact-item p {
  color: #ccc;
  margin: 0;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
  }
  
  .contact-item {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 3rem 0;
  }
  
  .contact-subtitle {
    font-size: 1.1rem;
  }
  
  .contact-icon {
    font-size: 1.5rem;
    padding: 0.8rem;
  }
}</style>