// src/store/index.js
import { createStore } from 'vuex';
import projects from './proyecto';
import habilidades from './habilidades'

const store = createStore({
  modules: {
    projects,
    habilidades,
  },
});

export default store;
