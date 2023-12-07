<template>
  <div>
    <h2>Nuevo Grupo</h2>
    <label for="txtclavemateria">Clave Materia</label>
    <input type="text" name="txtclavemateria" id="txtclavemateria" v-model="grupo.clavemateria" class="form-control">
    <br>
    <label for="txtclavegrupo">Clave Grupo</label>
    <input type="text" name="txtclavegrupo" id="txtclavegrupo" v-model="grupo.clavegrupo" class="form-control">
    <br>
    <label for="txtclavemaestro">Clave Maestro</label>
    <input type="text" name="txtclavemaestro" id="txtclavemaestro" v-model="grupo.clavemaestro" class="form-control">
    <br>
    <label for="txtlimitealumnos">Límite de Alumnos</label>
    <input type="text" name="txtlimitealumnos" id="txtlimitealumnos" v-model="grupo.limitealumnos" class="form-control">
    <br>
    <label for="txtinscritos">Inscritos</label>
    <input type="text" name="txtinscritos" id="txtinscritos" v-model="grupo.inscritos" class="form-control">
    <br>
    <button @click.prevent="agregarNuevoGrupo()" class="btn btn-success btn-lg">Agregar Nuevo Grupo</button>
  </div>
</template>

<script>
import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

export default {
  name: "NuevoGrupo",
  data() {
    return {
      grupo: {
        clavemateria: "",
        clavegrupo: "",
        clavemaestro: 0,
        limitealumnos: 0,
        inscritos: 0,
        horariolunes: "",
        horariomartes: "",
        horariomiercoles: "",
        horariojueves: "",
        horarioviernes: "",
      },
    };
  },
  methods: {
    agregarNuevoGrupo: async function () {
      try {
        const res = await axios.post(`${URL_DATOS}/grupos/`, this.grupo);
        console.log(res);
        alert("Grupo agregado con éxito");
        this.$router.push({ name: "grupos" });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
