import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditarMaestro from '../components/EditarMaestro.vue'
import NuevoMaestro from '../components/NuevoMaestro.vue'
import Maestros from '../views/Maestros.vue'
import Alumnos from '../views/Alumnos.vue'
import EditarAlumno from '../components/EditarAlumno.vue'
import NuevoAlumno from '../components/NuevoAlumno.vue'
import Materias from '../views/Materias.vue'
import EditarMateria from '../components/EditarMateria.vue'
import NuevaMateria from '../components/NuevaMateria.vue'
import Grupos from '../views/Grupos.vue'
import EditarGrupo from '../components/EditarGrupo.vue'
import NuevoGrupo from '../components/NuevoGrupo.vue'
import TomaCarga from '../views/TomaCarga.vue'

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
    path:'/editarmateria',
    name:'editarmateria',
    component:EditarMateria,
    props:true
  },
  {
    path:'/nuevamateria',
    name:'nuevamateria',
    component:NuevaMateria,
  },
  {
    path:'/grupos',
    name:'grupos',
    component:Grupos,
  },
  {
    path:'/editargrupo',
    name:'editargrupo',
    component:EditarGrupo,
  },
  {
    path:'/nuevogrupo',
    name:'nuevogrupo',
    component:NuevoGrupo,
  },
  {
    path:'/tomacarga',
    name:'tomacarga',
    component:TomaCarga,

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
