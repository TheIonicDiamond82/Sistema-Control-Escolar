<template>
  <div>
    <h2>Toma de Carga</h2>
    <label for="txtNControl">Número de Control</label>
    <input type="number" name="txtNControl" id="txtNControl" v-model="ncontrol" class="form-control">
    <br>
    <label for="selectClaveMateria">Clave de Materia</label>
    <select name="selectClaveMateria" id="selectClaveMateria" v-model="clavemateria" class="form-control">
      <option v-for="materia in materias" :key="materia.clavemateria" :value="materia.clavemateria">{{ materia.clavemateria }}</option>
    </select>
    <br>
    <label for="selectClaveGrupo">Clave de Grupo</label>
    <select name="selectClaveGrupo" id="selectClaveGrupo" v-model="clavegrupo" class="form-control">
      <option v-for="grupo in grupos" :key="grupo.clavegrupo" :value="grupo.clavegrupo">{{ grupo.clavegrupo }}</option>
    </select>
    <br>
    <button @click.prevent="tomarCarga()" class="btn btn-success btn-lg">Tomar Carga</button>
  </div>
</template>

<script>
import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

export default {
  name: "TomaDeCargaComponent",
  data() {
    return {
      ncontrol: "",
      clavemateria: "",
      clavegrupo: "",
      materias: [],
      grupos: [],
    };
  },
  created() {
    this.traerMaterias();
    this.traerGrupos();
  },
  methods: {
    traerMaterias: async function () {
      try {
        const response = await axios.get(`${URL_DATOS}/materias`);
        this.materias = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    traerGrupos: async function () {
      try {
        const response = await axios.get(`${URL_DATOS}/grupos`);
        this.grupos = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    tomarCarga: async function () {
      try {
        const res = await axios.post(`${URL_DATOS}/tomadecarga`, {
          ncontrol: this.ncontrol,
          clavemateria: this.clavemateria,
          clavegrupo: this.clavegrupo,
        });
        console.log(res);
        alert(res.data);
        // Puedes redirigir a otra página después de tomar la carga si es necesario
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 409) {
          alert("Error: La carga ya existe para ese alumno. No se pueden duplicar entradas.");
        } else
          if (error.response && error.response.status === 400) {
            alert("Error: El grupo está lleno. No se puede inscribir más alumnos.");
          } else
            alert("Error al tomar carga. Consulta la consola para más detalles.");
      }
    },
  },
};
</script>
