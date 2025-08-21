<script setup lang="ts">
interface Emits {
  scrollToSection: [sectionId: string]
}

const emit = defineEmits<Emits>()

const handleScrollToSection = (sectionId: string) => {
  emit('scrollToSection', sectionId)
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <h3>Portfólio</h3>
          <p>Desenvolvedor apaixonado por criar soluções digitais inovadoras.</p>
        </div>
        <div class="footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#home" @click="handleScrollToSection('home')">Início</a></li>
            <li><a href="#about" @click="handleScrollToSection('about')">Sobre</a></li>
            <li><a href="#projects" @click="handleScrollToSection('projects')">Projetos</a></li>
            <li><a href="#contact" @click="handleScrollToSection('contact')">Contato</a></li>
          </ul>
        </div>
        <div class="footer-social">
          <h4>Redes Sociais</h4>
          <div class="social-links">
            <a href="https://wa.me/5524998503702" target="_blank" class="social-link whatsapp">
              <img src="@/assets/images/whatsapp.png" alt="WhatsApp" class="social-icon" /> WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/clodualdo-j-ab7a86116/" target="_blank" class="social-link linkedin">
              <img src="@/assets/images/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png-removebg-preview (2).png" alt="LinkedIn" class="social-icon" /> LinkedIn
            </a>
            <a href="https://github.com/GitAquino" target="_blank" class="social-link github">
              <img src="@/assets/images/github.png" alt="GitHub" class="social-icon" /> GitHub
            </a>
            <a href="https://www.instagram.com/jr_aaquino/" target="_blank" class="social-link instagram">
              <img src="@/assets/images/three-dimensional-instagram-icon-social-software-likes_494359_wh1200-removebg-preview.png" alt="Instagram" class="social-icon" /> Instagram
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025, Clodualdo Aquino. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0a0a0a;
  color: #fff;
  padding: 3rem 0 1rem;
  border-top: 1px solid #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-info h3 {
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.footer-info p {
  color: #ccc;
  line-height: 1.6;
}

.footer-links h4,
.footer-social h4 {
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ffd700;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ccc;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.social-link:hover {
  color: #ffd700;
  background: rgba(255, 215, 0, 0.1);
  border-color: #ffd700;
  transform: translateX(5px);
}

.social-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.social-link:hover .social-icon {
  transform: scale(1.1);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #888;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .social-links {
    align-items: center;
  }
}
</style>