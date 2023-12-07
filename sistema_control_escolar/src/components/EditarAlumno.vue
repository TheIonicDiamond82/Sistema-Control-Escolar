<template>
    <div class="Editar">
    <br>
    <h3>Modificar al alumno con numero de control: {{id}}</h3><br>
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
    <select name="txtstatus" id="txtstatus" v-model="alumnos.estatus" class="form-control">
        <option value="A">Activo</option>
        <option value="I">Inactivo</option>
    </select>
    <br>
    <button @click.prevent="actualizar()" class="btn btn-primary btn-lg">Actualizar alumno</button>
    </div>
</template>
<script>
import { URL_DATOS} from '../utils/constantes.js'
import axios from "axios"
export default {
    name:"EditarAlumno",
    components:{},
    props:
    {
        id:Number,
    },
    data: function()
    {
        return {
            alumnos:[],
        }
    },
    created()
    {
        this.traeDetalleAlumno();
    },
    methods: {
        traeDetalleAlumno: async function()
        {
            let a = [];
            await axios.get(URL_DATOS+"/alumnos/"+this.id).then(
                function(response)
                {
                    console.log(response.data[0]);
                    a=response.data[0];
                }
            ).catch(function(error)
            {
                console.log(error);
            });
            this.alumnos=a;
        },
        actualizar: async function()
        {
            const res = await axios.put(URL_DATOS+"/alumnos/"+this.id,{
                nombre: this.alumnos.nombre,
                carrera:this.alumnos.carrera,
                estatus: this.alumnos.estatus,
            });
            
            console.log(res);
            alert("Alumno actualizado con exito");
            this.$router.push({ name:"alumnos"})
        },
        
    },
};
</script>