// src/store/projects.js
import coffeAgereImg from '../assets/img/coffe-agere.png';
import ricomidaImg from '../assets/img/ricomida.png';
import suricataImg from '../assets/img/suricata.png';
import suricataVImg from '../assets/img/suricata_vue.png';
import SuperImg from '../assets/img/SuperHero.png';
import ViajesImg from '../assets/img/Viejes_chile.png';
const state = () => ({
  proyectos: [
    { imgCard: coffeAgereImg, nombre: 'Coffee Agere', description: '',git:'https://github.com/karen371/coffee-Agrere' },
    { imgCard: ricomidaImg, nombre: 'Ricomida', description: '', git:'https://github.com/karen371/Ricomida' },
    { imgCard: suricataImg, nombre: 'Suricata', description: '', git:'https://karen371.github.io/suricata_page/' },
    { imgCard: SuperImg, nombre: 'SuperHero', description: '',git:'https://github.com/karen371/superhero' },
    { imgCard: ViajesImg, nombre: 'Viajes chile', description: '',git:'https://github.com/karen371/Viajes-chile-sass-bootstrap2' },
    { imgCard: suricataVImg, nombre: 'Suricata vue', description: '',git:'https://github.com/karen371/suricata_vue_router' },
  ],
});

const getters = {
  getAllProyectos: (state) => state.proyectos,
};

export default {
  namespaced: true,
  state,
  getters,
};
