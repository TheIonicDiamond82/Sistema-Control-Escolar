<template>
  <div class="Editar">
    <br>
    <h3>Modificar materia: {{clave}}</h3><br>
    <label for="txtnombre">Nombre de la materia</label>
    <input type="text" name="txtnombre" id="txtnombre" v-model="materia.nombre" class="form-control">
    <br>
    <label for="txtcreditos">Créditos</label>
    <input type="number" min="1" max="6" name="txtcreditos" id="txtcreditos" v-model="materia.creditos" class="form-control">
    <br>
    <button @click.prevent="actualizar()" class="btn btn-primary btn-lg">Actualizar materia</button>
  </div>
</template>

<script>
import { URL_DATOS } from '../utils/constantes.js'
import axios from "axios"

export default {
  name: "EditarMateria",
  components: {},
  props: {
    clave: String,
  },
  data() {
    return {
      materia: {
        nombre: "",
        creditos: 0,
      },
    };
  },
  created() {
    this.traeDetalleMateria();
  },
  methods: {
    traeDetalleMateria: async function () {
      let materia = {};
      try {
        const response = await axios.get(`${URL_DATOS}/materias/${this.clave}`);
        console.log(response.data);
        materia = response.data[0];
      } catch (error) {
        console.log(error);
      }
      this.materia = materia;
    },
    actualizar: async function () {
      try {
        const res = await axios.put(`${URL_DATOS}/materias/${this.clave}`, {
          nombre: this.materia.nombre,
          creditos: this.materia.creditos,
        });
        console.log(res);
        alert("Materia actualizada con éxito");
        this.$router.push({ name: "materias" });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
