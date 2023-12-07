<template>
  <div class="NuevaMateria">
    <br>
    <h3>Nueva Materia</h3><br>
    <label for="txtclavemateria">Clave de la materia</label>
    <input type="text" name="txtclavemateria" id="txtclavemateria" v-model="materia.codigo" class="form-control">
    <br>
    <label for="txtnombre">Nombre de la materia</label>
    <input type="text" name="txtnombre" id="txtnombre" v-model="materia.nombre" class="form-control">
    <br>
    <label for="txtcreditos">Créditos</label>
    <input type="number" min="1" max="6" name="txtcreditos" id="txtcreditos" v-model="materia.creditos" class="form-control">
    <br>
    <button @click.prevent="nueva()" class="btn btn-success btn-lg">Agregar nueva materia</button>
  </div>
</template>

<script>
import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

export default {
  name: "NuevaMateria",
  components: {},
  data: function () {
    return {
      materia: {
        codigo: "",
        nombre: "",
        creditos: 0,
      },
    };
  },
  methods: {
    nueva: async function () {
      try {
        const res = await axios.post(`${URL_DATOS}/materias/`, {
          clavemateria: this.materia.clavemateria,
          nombre: this.materia.nombre,
          creditos: this.materia.creditos,
        });
        console.log(res);
        alert("Materia agregada con éxito");
        this.$router.push({ name: "materias" });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
