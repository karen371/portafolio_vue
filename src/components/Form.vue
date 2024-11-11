<!-- ContactForm.vue -->
<template>
    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" id="name" v-model="form.name" class="form-control" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input type="email" id="email" v-model="form.email" class="form-control" required>
        </div>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Mensaje</label>
        <textarea id="message" v-model="form.message" class="form-control" rows="4" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        // Aquí puedes agregar la lógica para enviar el formulario a un servidor o un email
        console.log('Formulario enviado:', this.form);
        alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-form {
    max-width: 700px;
    margin: 0 auto;
  }
  
  .contact-form .form-label {
    font-weight: bold;
  }
  .btn-primary{
    background-color: var(--vt-c-dark-purple);
    border: var(--vt-c-dark-purple)
  }
  .btn-primary:hover {
    background-color: var(--vt-c-light-purple); /* El color que deseas cuando el botón es hover */
    border: var(--vt-c-light-purple); /* El color de borde cuando se pasa el ratón */
    cursor: pointer; /* Cambia el cursor para indicar que el botón es interactivo */
  }
  </style>
  