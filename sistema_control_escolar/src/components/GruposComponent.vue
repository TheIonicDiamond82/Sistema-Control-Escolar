<template>
  <div>
    <h2>Listado de Grupos</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Clave Grupo</th>
          <th>Clave Materia</th>
          <th>Clave Maestro</th>
          <th>Límite de Alumnos</th>
          <th>Inscritos</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="grupo in grupos" :key="grupo.clavegrupo">
          <td>{{ grupo.clavegrupo }}</td>
          <td>{{ grupo.clavemateria }}</td>
          <td>{{ grupo.clavemaestro }}</td>
          <td>{{ grupo.limitealumnos }}</td>
          <td>{{ grupo.inscritos }}</td>
          <td>
                   <button id="edit" class="btn btn-info btn-md" @click.prevent="editargrupo(grupo.clavegrupo)">Editar grupo</button>
            <button class="btn btn-danger btn-md" @click.prevent="eliminarGrupo(grupo.clavegrupo)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <button @click="nuevoGrupo()" class="btn btn-success btn-lg" id="btnN">Agregar Nuevo Grupo</button>
  </div>
</template>

<script>
import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

export default {
  name: "GruposComponent",
  data() {
    return {
      grupos: [],
    };
  },
  created() {
    this.traerGrupos();
  },
  methods: {
    traerGrupos: async function () {
      try {
        const response = await axios.get(`${URL_DATOS}/grupos`);
        this.grupos = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    editarAlumno: function(id)
    {
        this.$router.push({name:"editargrupo", params:{id: id } });
    },
    eliminarGrupo: async function (clavegrupo) {
      if (confirm("¿Seguro que deseas eliminar este grupo?")) {
        try {
          const res = await axios.delete(`${URL_DATOS}/grupos/${clavegrupo}`);
          this.traerGrupos();
          console.log(res);
        } catch (error) {
          console.error(error);
        }
      }
    },
    nuevoGrupo: function () {
      this.$router.push({ name: "nuevogrupo", params: {} });
    },
  },
};
</script>
