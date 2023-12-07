<template>
    <div class="Nuevo">
    <h2>Nuevo maestro</h2><br>
    <label for="cvemtr">Clave del maestro</label>
    <input type="number" name="txtncvemtrcontrol" id="cvemtr" v-model="maestros.clavemaestro" class="form-control">
    <br>
    <label for="txtnombre">Nombre del maestro</label>
    <input type="text" name ="txtnombre" id = "txtnombre" v-model="maestros.nombre" class="form-control">
    <br>
    <label for="txtdepartamento">Departamento</label>
    <input type="text" name ="txtdepartamento" id = "txtdepartamento" v-model="maestros.departamento" class="form-control">
    <br>
    <label for="txtstatus">Estatus</label>
    <select name="txtstatus" id="txtstatus" v-model="maestros.estatus" class="form-control">
        <option value="A">Activo</option>
        <option value="I">Inactivo</option>
    </select>
    <br>
    <button @click.prevent ="nuevo()" class="btn btn-success btn-lg">Registrar a nuevo maestro</button>
    </div>
</template>
<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";
export default {
    name: "NuevoMaestro",
    components: {},
    data: function()
    {
        return {
            maestros:[]
        };
    },
    methods: {
        nuevo: async function()
        {
             const res = await axios.post(URL_DATOS+"/maestros/",{
                clavemaestro: this.maestros.clavemaestro,
                nombre: this.maestros.nombre,
                departamento:this.maestros.departamento,
                estatus: this.maestros.estatus,
            });
            alert("Maestro registrado con exito");
            this.$router.push({ name:"maestros"})
            console.log(res);
            
        }
    },
}
</script>