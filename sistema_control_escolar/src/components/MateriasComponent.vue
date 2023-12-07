<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Clave de Materia</th>
          <th>Nombre</th>
          <th>Creditos</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="materia in materias" :key="materia.clavemateria">
          <td>{{ materia.clavemateria }}</td>
          <td>{{ materia.nombre }}</td>
          <td>{{ materia.creditos }}</td>
          <td>
            <button id="edit" class="btn btn-info btn-md" @click.prevent="editarMateria(materia.clavemateria)">Editar materia</button>
            <button class="btn btn-danger btn-md" @click.prevent="eliminarMateria(materia.clavemateria)">Eliminar materia</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="nuevaMateria()" class="btn btn-success btn-lg" id="btnN">Registrar nueva materia</button>
  </div>
</template>

<script>
import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

export default {
  name: "MateriasComponent",
  components: {},
  data() {
    return {
      materias: [],
    };
  },
  created() {
    this.traerMaterias();
  },
  methods: {
    traerMaterias: async function () {
      let materias = [];
      try {
        const response = await axios.get(`${URL_DATOS}/materias`);
        materias = response.data;
      } catch (error) {
        console.error(error);
      }
      this.materias = materias;
    },
    editarMateria: function (clave) {
      this.$router.push({ name: "editarmateria", params: { clave: clave } });
    },
    eliminarMateria: async function (clave) {
      if (confirm("¿Seguro que deseas eliminar esta materia?")) {
        try {
          const res = await axios.delete(`${URL_DATOS}/materias/${clave}`);
          this.traerMaterias();
          console.log(res);
        } catch (error) {
          console.error(error);
        }
      }
    },
    nuevaMateria: function () {
      this.$router.push({ name: "nuevamateria", params: {} });
    },
  },
};
</script>

<style>
#btnN
{
    left:0;
}
#edit
{
    margin-right: 8px;
}
</style>