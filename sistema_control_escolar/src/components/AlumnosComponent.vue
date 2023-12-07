<template>
    <div >
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Numero de control</th>
                <th>Nombre</th>
                <th>Carrera</th>
                <th>Estatus</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="alu in alumnos" :key="alu.ncontrol"> 
                <td >
                    {{alu.ncontrol}}
                </td>
                <td >
                    {{alu.nombre}}
                </td>
                <td >
                    {{alu.carrera}}
                </td>
                <td >
                    {{alu.estatus=='A'?'Activo':'Inactivo'}}
                </td>
                <td >
                   <button id="edit" class="btn btn-info btn-md" @click.prevent="editarAlumno(alu.ncontrol)">Editar alumno</button>
                    <button class="btn btn-danger btn-md" @click.prevent="eliminarAlumno(alu.ncontrol)">Eliminar alumno</button>
                </td>

            </tr>
        </tbody>
    </table>
    <button @click="nuevoAlumno()" class="btn btn-success btn-lg" id="btnN">Registrar nuevo alumno</button>
    </div>
</template>

<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";
export default {
    name: "AlumnosComponent",
    components: {},
    data: function()
    {
        return {
            alumnos: []
        };
    },
    created()
    {
        this.traeAlumnos();
    },
    methods: {
        traeAlumnos: async function()
        {
            let a = [];
            await axios.get(URL_DATOS+"/alumnos").then(
                function(response)
                {
                    console.log(response);
                    a=response.data;
                }
            ).catch(function(error)
            {
                console.log(error);
            });
            this.alumnos=a;
        },
        editarAlumno: function(id)
        {
            this.$router.push({name:"editaralumno", params:{id: id } });
        },
        eliminarAlumno: async function(id)
        {
            if(confirm("¿Seguro que deseas eliminar a este alumno?"))
           {
                const res = await axios.delete(URL_DATOS+"/alumnos/"+id)
                this.traeAlumnos();
                console.log(res)

            }
            else{
                
            }
        },
        nuevoAlumno: function()
        {
            this.$router.push({name:"nuevoalumno", params:{ } });
        },
    },
}
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
