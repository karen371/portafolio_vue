// src/store/projects.js
import HtmlImg from '../assets/img/html5-brands-solid.svg';
import CSsImg from '../assets/img/css3-alt-brands-solid.svg';
import JSImg from '../assets/img/js-brands-solid.svg';
import BoostImg from '../assets/img/bootstrap-brands-solid.svg';
import VueImg from '../assets/img/vuejs-brands-solid.svg';


const state = () => ({
  habilidades: [
    { imageSrc: HtmlImg, title: 'HTML' },
    { imageSrc: CSsImg, title: 'CSS3' },
    { imageSrc: JSImg, title: 'JavaScript' },
    { imageSrc: BoostImg, title: 'Bootstrap' },
    { imageSrc: VueImg, title: 'Vue' },
  ],
});

const getters = {
  getAllHabilidades: (state) => state.habilidades,
};

export default {
  namespaced: true,
  state,
  getters,
};
