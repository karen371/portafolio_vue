<script>
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import HabilidadesItem from '@/components/HabilidadesItem.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
    Card,
    HabilidadesItem,
    Button
  },
  computed: {
    ...mapGetters('projects', ['getAllProyectos']), 
    ...mapGetters('habilidades',['getAllHabilidades']),
    proyectos() {
      // Mostrar solo los primeros 3 proyectos
      return this.getAllProyectos.slice(0, 3);
    },
    habilidades(){
      return this.getAllHabilidades;
    }
  },
};
</script>

<template>
  <section class="proyectos-destacados py-5">
    <div class="text-center mb-4">
      <h2 class="fw-bold">Proyectos Destacados</h2>
      <p class="text-muted">Explora algunos de los proyectos en los que he trabajado recientemente.</p>
    </div>
    <div class="contenedor-proyectos">
      <Card
        v-for="(proyecto, index) in proyectos"
        :key="index"
        :imgCard="proyecto.imgCard"
        :nombre="proyecto.nombre"
        :description="proyecto.description"
        :git="proyecto.git"
      />
    </div>
  </section>

  <section class="habilidades pt-4">
    <div class="text-center mb-4 ">
      <h2 class="fw-bold"> Mis Habilidades</h2>
      <p class="text-muted">Descubre algunas de las herramientas y tecnologías en las que tengo experiencia y que uso para construir soluciones efectivas.</p>
    </div>
    <div class="contenedor-habilidades">
      <div class="row">
        <HabilidadesItem 
          v-for="(habilidad, index) in habilidades" 
          :key="index" 
          :imageSrc="habilidad.imageSrc" 
          :title="habilidad.title" 
        />
      </div>
    </div>
  </section>

  <section class="cta-container py-5 text-center">
    <div class="cta-content">
      <h2 class="fw-bold">¡Vamos a trabajar juntos!</h2>
      <p class="text-muted mb-4">Estoy listo para ayudarte a construir soluciones creativas y efectivas. ¿Tienes un proyecto en mente? ¡Hablemos!</p>
      <Button />
    </div>
  </section>
</template>

<style scoped>
/* Contenedor para mantener los proyectos en la misma fila */
.contenedor-proyectos {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Espacio entre los proyectos */
  margin: 15px;
  flex-wrap: wrap; /* Asegura que los proyectos se ajusten en pantallas más pequeñas */
}

/* Asegura que las tarjetas no se estiren */
.contenedor-proyectos > * {
  flex: 1;
  max-width: 30%; /* Establece un tamaño máximo de las tarjetas */
  box-sizing: border-box; /* Asegura que el padding y border no afecten el tamaño */
}

/* Ajustes en pantallas más pequeñas */
@media (max-width: 768px) {
  .contenedor-proyectos > * {
    max-width: 100%; /* En pantallas pequeñas, las tarjetas ocupan el 100% del contenedor */
  }
}

h2 {
  color: var(--vt-c-deep-blue);
}

p {
  color: var(--vt-c-light-gray);
}

.habilidades {
  background-color: var(--vt-c-light-pink);
}
</style>
