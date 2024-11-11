<script>
export default {
  props: {
    imgCard: {
      type: String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    git: {
      type: String,
      required: true
    }
  }
};
</script>
<template>
  <div class="card shadow-lg border-0 rounded-4" style="width: 20rem;">
    <img :src="imgCard" class="card-img-top rounded-top-4" alt="Imagen del proyecto">
    <div class="card-body">
      <h5 class="card-title fw-bold mb-3">{{ nombre }}</h5>
      <p class="card-text text-muted">{{ description }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <a :href="git" class="text-secondary" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github fa-lg"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #f9f9f9;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  color: #003b5c;
}

.btn-primary {
  background-color: var(--vt-c-pale-blue);
  border-color: var(--vt-c-soft-blue);
}

.btn-primary:hover {
  background-color: #7a9bd7;
}
</style>
