<template>
    <div class="Editar">
    <br>
    <h3>Modificar maestro: {{id}}</h3><br>
    <label for="txtnombre">Nombre del maestro</label>
    <input type="text" name ="txtnombre" id = "txtnombre" v-model="maestros.nombre" class="form-control">
    <br>
    <label for="txtdepartamento">Departamento</label>
    <input type="text" name ="txtdepartamento" id = "txtdepartamento" v-model="maestros.departamento" class="form-control">
    <br>
    <label for="txtstatus">Estatus</label>
    <input type="text" name ="txtstatus" id = "txtstatus" v-model="maestros.estatus" class="form-control">
    <br>
    <button @click.prevent ="actualizar()" class="btn btn-primary btn-lg">Actualizar maestro</button>
    </div>
</template>
<script>
import { URL_DATOS} from '../utils/constantes.js'
import axios from "axios"
export default {
    name:"EditarMaestro",
    components:{},
    props:
    {
        id:Number,
    },
    data: function()
    {
        return {
            maestros:[],
        }
    },
    created()
    {
        this.traeDetalleMaestro();
    },
    methods: {
        traeDetalleMaestro: async function()
        {
            let a = [];
            await axios.get(URL_DATOS+"/maestros/"+this.id).then(
                function(response)
                {
                    console.log(response.data[0]);
                    a=response.data[0];
                }
            ).catch(function(error)
            {
                console.log(error);
            });
            this.maestros=a;
        },
        actualizar: async function()
        {
            const res = await axios.put(URL_DATOS+"/maestros/"+this.id,{
                nombre: this.maestros.nombre,
                departamento:this.maestros.departamento,
                estatus: this.maestros.estatus,
            });
            console.log(res);
            alert("Maestro actualizado con exito");
            this.$router.push({ name:"maestros"})
            
        },
        
    },
};
</script>