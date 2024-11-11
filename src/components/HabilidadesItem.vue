<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
<template>
  <div class="col-md-2 text-center mb-4 contenedor">
    <div class="habilidad-item">
      <img :src="imageSrc" :alt="title" class="img-fluid mb-3" style="width: 100%; max-width: 100px;">
      <h5>{{ title }}</h5>
    </div>
  </div>
</template>
<style scoped>
.contenedor{
  margin: auto;
}
.habilidad-item {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.habilidad-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.habilidad-item img {
  width: 80px;
}

.habilidad-item h5 {
  font-size: 18px;
  margin-top: 10px;
}
</style>
