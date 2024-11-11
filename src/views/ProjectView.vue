<script>
import Card from '@/components/Card.vue'; // Asegúrate de que la ruta esté correcta
import { mapGetters } from 'vuex'
export default {
  components: {
    Card
  },
  computed: {
    ...mapGetters('projects', ['getAllProyectos']),
    proyectos() {
      // Mostrar solo los primeros 3 proyectos
      return this.getAllProyectos
    },
  },
}
</script>

<template>
  <section class="projects">
    <div class="text-center mt-4">
      <h2>Proyectos</h2>
    </div>
    <div class="projects-container">
      <Card
        v-for="(proyecto, index) in proyectos"
        :key="index"
        :imgCard="proyecto.imgCard"
        :nombre="proyecto.nombre"
        :description="proyecto.description"
      />
    </div>
  </section>
</template>

<style scoped>
  .projects {
    margin-top: 50px;
  }

  .projects-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center; /* Centra las tarjetas */
  }

  h2 {
    color: var(--vt-c-deep-blue);
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    .projects-container {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
