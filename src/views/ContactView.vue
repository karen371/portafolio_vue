<script>
import Form from '@/components/Form.vue';

export default {
  components: {
    Form
  }
};
</script>
<template>
    <section class="contact">
      <div class="container">
        <div class="text-center mb-4">
          <h2 class="fw-bold">Contacto</h2>
          <p class="text-muted">Si tienes alguna pregunta o simplemente quieres ponerte en contacto, no dudes en enviarme un mensaje.</p>
        </div>
        <!-- Usamos el componente ContactForm -->
        <Form />
        <!-- Redes Sociales -->
        <div class="social-media mt-4 text-center">
          <h5>Sígueme en mis redes sociales:</h5>
          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" class="mx-2">
            <i class="fa-brands fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/tu-usuario" target="_blank" class="mx-2">
            <i class="fa-brands fa-github fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/k_emilly03/profilecard/?igsh=ZDdkbTRrNW9wMHd6" target="_blank" class="mx-2">
            <i class="fa-brands fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    </section>
  </template>
  <style scoped>
  h2 {
    color: var(--vt-c-deep-blue);
    font-weight: bold;
  }
  .contact {
    padding: 60px 0;
  }
  
  .contact .social-media {
    margin-top: 30px;
  }
  
  .contact .social-media a {
    text-decoration: none;
    color: #333;
  }
  
  .contact .social-media a:hover {
    color: var(--vt-c-deep-blue);
  }
  </style>
  