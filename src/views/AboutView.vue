<script>
import miFoto from '../assets/img/MiFoto.jpeg'
export default {
  data(){
    return{
      miFoto
    }
  }
}
</script>
<template>
  <section class="about">
    <div class="text-center mt-4">
      <h2>Sobre Mí</h2>
    </div>
    <div class="contenido-about">
      <div class="about-img">
        <img :src="miFoto" class="card-img-top rounded-top-4" alt="Yo">
      </div>
      <div class="about-text">
        <p>
          Ingeniera en Informática titulada del Instituto Santo Tomás, 
          con una especialización en desarrollo Front End. Mi pasión por la tecnología y 
          mi compromiso con la excelencia me han llevado a enfocarme en crear interfaces 
          web atractivas y funcionales. Lo que me distingue en mi campo es mi dedicación, 
          responsabilidad y proactividad. Siempre estoy dispuesta a aprender cosas nuevas y 
          a enfrentar desafíos con una actitud positiva. 
          Mi objetivo es seguir perfeccionando mi carrera y adquirir nuevos conocimientos 
          para ofrecer los mejores resultados en el desarrollo de páginas web. Estoy 
          entusiasmada por la oportunidad de colaborar en proyectos innovadores y de seguir 
          contribuyendo al avance del diseño y desarrollo web. Si buscas una profesional 
          comprometida y con un enfoque en la calidad, no dudes en ponerte en contacto.
        </p>
        <p>¡Estoy lista para llevar tu proyecto al siguiente nivel!.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
  h2 {
    color: var(--vt-c-deep-blue);
    font-weight: bold;
  }

  p {
    color: var(--vt-c-light-gray);
    line-height: 1.6;
    font-size: 1rem;
  }

  .about {
    padding: 2rem 1rem; /* Espaciado alrededor de la sección */
  }

  .contenido-about {
    display: flex;
    justify-content: space-evenly; /* Espacio entre la imagen y el texto */
    align-items: center; /* Alineación vertical */
    flex-wrap: wrap; /* Asegura que se acomode en pantallas pequeñas */
    gap: 1rem; /* Espacio entre los elementos */
  }

  .about-img {
    flex: 1 1 40%; /* La imagen ocupa el 40% del ancho */
    max-width: 300px; /* Limita el tamaño máximo */
    text-align: center; /* Centra la imagen dentro de su contenedor */
  }
  .about-img img{
    border-radius: 10%;
  }
  .about-text {
    flex: 1 1 50%; /* El texto ocupa el 50% del ancho */
    max-width: 600px; /* Controla el tamaño máximo */
  }

  /* Para pantallas más pequeñas */
  @media (max-width: 768px) {
    .contenido-about {
      flex-direction: column; /* Cambiar a columna en pantallas pequeñas */
      align-items: center;
    }

    .about-img {
      flex: 1 1 100%; /* Imagen ocupa toda la línea en pantallas pequeñas */
      max-width: 200px; /* Limitar el tamaño de la imagen en dispositivos pequeños */
    }

    .about-text {
      flex: 1 1 100%; /* El texto también ocupa toda la línea */
    }
  }
</style>

