<template>
    <div >
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Clave del maestro</th>
                <th>Nombre</th>
                <th>Departamento</th>
                <th>Estatus</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="mtr in maestros" :key="mtr.clavemaestro"> 
                <td >
                    {{mtr.clavemaestro}}
                </td>
                <td >
                    {{mtr.nombre}}
                </td>
                <td >
                    {{mtr.departamento}}
                </td>
                <td >
                    {{mtr.estatus=='A'?'Activo':'Inactivo'}}
                <td >
                   <button id="edit" class="btn btn-info btn-md" @click.prevent="editarMaestro(mtr.clavemaestro)">Editar maestro</button>
                    <button class="btn btn-danger btn-md" @click.prevent="eliminarMaestro(mtr.clavemaestro)">Eliminar maestro</button>
                </td>

            </tr>
        </tbody>
    </table>
    <button @click="nuevomaestro()" class="btn btn-success btn-lg" id="btnN">Nuevo maestro</button>
    </div>
</template>

<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";
export default {
    name: "MaestrosComponent",
    components: {},
    data: function()
    {
        return {
            maestros: []
        };
    },
    created()
    {
        this.traeMaestros();
    },
    methods: {
        traeMaestros: async function()
        {
            let a = [];
            await axios.get(URL_DATOS+"/maestros").then(
                function(response)
                {
                    console.log(response);
                    a=response.data;
                }
            ).catch(function(error)
            {
                console.log(error);
            });
            this.maestros=a;
        },
        editarMaestro: function(id)
        {
            this.$router.push({name:"editarmaestro", params:{id: id } });
        },
        eliminarMaestro: async function(id)
        {
            
            
            if(confirm("¿Seguro que deseas eliminar a este maestro?"))
           {
                const res = await axios.delete(URL_DATOS+"/maestros/"+id);
                this.traeMaestros();
                console.log(res)
                
            }
            else{
                
            }
        },
        nuevomaestro: function()
        {
            this.$router.push({name:"nuevomaestro", params:{ } });
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
