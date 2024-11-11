// src/store/projects.js
import coffeAgereImg from '../assets/img/coffe-agere.png';
import ricomidaImg from '../assets/img/ricomida.png';
import suricataImg from '../assets/img/suricata.png';

const state = () => ({
  proyectos: [
    { imgCard: coffeAgereImg, nombre: 'Coffee Agere', description: '' },
    { imgCard: ricomidaImg, nombre: 'Ricomida', description: '' },
    { imgCard: suricataImg, nombre: 'Suricata', description: '' },
    { imgCard: coffeAgereImg, nombre: 'Coffee Agere', description: '' },
    { imgCard: ricomidaImg, nombre: 'Ricomida', description: '' },
    { imgCard: suricataImg, nombre: 'Suricata', description: '' },
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
