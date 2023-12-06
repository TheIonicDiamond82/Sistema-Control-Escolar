<template>
    <div class="Agregar">
    <br>
    <h3>Nuevo Alumno</h3><br>
    <label for="txtncontrol">Numero de control del alumno</label>
    <input type="number" name="txtncontrol" id="txtncontrol" v-model="alumnos.ncontrol" class="form-control">
    <br>
    <label for="txtnombre">Nombre del alumno</label>
    <input type="text" name="txtnombre" id="txtnombre" v-model="alumnos.nombre" class="form-control">
    <br>
    <label for="txtcarrera">Carrera</label>
    <select name="txtcarrera" id="txtcarrera" v-model="alumnos.carrera" class="form-control">
        <option value="Ingenieria Ambiental">Ingenieria Ambiental</option>
        <option value="Ingenieria Bioquimica">Ingenieria Bioquimica</option>
        <option value="Ingenieria Electrica">Ingenieria Electrica</option>
        <option value="Ingenieria Electronica">Ingenieria Electronica</option>
        <option value="Ingenieria en Energias Renovables">Ingenieria en Energias Renovables</option>
        <option value="Ingenieria en Gestión Empresarial">Ingenieria en Gestión Empresarial</option>
        <option value="Ingenieria Industrial">Ingenieria Industrial</option>
        <option value="Ingenieria Mecanica">Ingenieria Mecanica</option>
        <option value="Ingenieria Mecatronica">Ingenieria Mecatronica</option>
        <option value="Ingenieria en Sistemas Computacionales">Ingenieria en Sistemas Computacionales</option>
        <option value="Ingenieria en Tecnologias de la Información y Comunicaciones">Ingenieria en Tecnologias de la Información y Comunicaciones</option>
    </select>
    <br>
    <label for="txtstatus">Estatus</label>
    <input type="text" name="txtstatus" id="txtstatus" v-model="alumnos.estatus" class="form-control">
    <br>
    <button @click.prevent="nuevo()" class="btn btn-success btn-lg">Registrar nuevo alumno</button>
    </div>
</template>
<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";
export default {
    name: "NuevoAlumno",
    components: {},
    data: function()
    {
        return {
            alumnos:[]
        };
    },
    methods: {
        nuevo: async function()
        {
             const res = await axios.post(URL_DATOS+"/alumnos/",{
                ncontrol: this.alumnos.ncontrol,
                nombre: this.alumnos.nombre,
                carrera:this.alumnos.carrera,
                estatus: this.alumnos.estatus,
            });
            alert("Alumno registrado con exito");
            this.$router.push({ name:"alumnos"})
            console.log(res);
            
        }
    },
}
</script>