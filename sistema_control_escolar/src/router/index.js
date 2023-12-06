import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditarMaestro from '../components/EditarMaestro.vue'
import NuevoMaestro from '../components/NuevoMaestro.vue'
import Maestros from '../views/Maestros.vue'
import Alumnos from '../views/Alumnos.vue'
import EditarAlumno from '../components/EditarAlumno.vue'
import NuevoAlumno from '../components/NuevoAlumno.vue'
import NuevoProveedor from '../components/NuevoProveedor.vue'
import EditarProveedor from '../components/EditarProveedor.vue'
import Materias from '../views/Materias.vue'
import Grupos from '../views/Grupos.vue'
import TomaCarga from '../views/TomaCarga.vue'
import FormAltas from '../components/FormAltas.vue'
import FormBajas from '../components/FormBajas.vue'
import TablaAltas from '../components/TablaAltas.vue'
import TablaBajas from '../components/TablaBajas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/alumnos',
    name: 'alumnos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Alumnos.vue')
    }
  },
  {
    path:'/editaralumno',
    name:'editaralumno',
    component:EditarAlumno,
    props:true
  },
  {
    path:'/nuevoalumno',
    name:'nuevoalumno',
    component:NuevoAlumno,

  },
  {
    path:'/maestros',
    name:'maestros',
    component:Maestros,
  },
  {
    path:'/nuevomaestro',
    name:'nuevomaestro',
    component:NuevoMaestro,
  },
  {
    path:'/editarmaestro',
    name:'editarmaestro',
    component:EditarMaestro,
    props:true
  },
  {
    path:'/materias',
    name:'materias',
    component:Materias,
  },
  {
    path:'/grupos',
    name:'grupos',
    component:Grupos,
  },
  {
    path:'/editarproveedor',
    name:'editarproveedor',
    component:EditarProveedor,
    props:true
  },
  {
    path:'/nuevoproveedor',
    name:'nuevoproveedor',
    component:NuevoProveedor,

  },
  {
    path:'/tomacarga',
    name:'tomacarga',
    component:TomaCarga,

  },
  {
    path:'/formbajas',
    name:'formbajas',
    component:FormBajas,

  },
  {
    path:'/tablabajas',
    name:'tablabajas',
    component:TablaBajas,

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
