import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from '@/views/NotFound'
import MyCarousel from '@/views/carousel/MyCarousel'
import ElementCarousel from '@/views/carousel/ElementCarousel'
import MutipleColumnSort from '@/views/table/MutipleColumnSort'
import FSPassValue from '@/views/passValue/FSPassValue'
import ADPassValue from '@/views/passValue/ADPassValue'
import NFSPassValue from '@/views/passValue/NFSPassValue'
import LazyLoad from '@/views/lazyLoad'
import DatePicker from '@/views/datePicker'
import Other from '@/views/other'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/myCarousel' },
  { path: '/myCarousel', component: MyCarousel },
  { path: '/elementCarousel', component: ElementCarousel },
  { path: '/mutipleColumnSort', component: MutipleColumnSort },
  { path: '/fsPassValue', component: FSPassValue },
  { path: '/adPassValue', component: ADPassValue },
  { path: '/nfsPassValue', component: NFSPassValue },
  { path: '/lazyLoad', component: LazyLoad },
  { path: '/datePicker', component: DatePicker },
  { path: '/other', component: Other },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  routes
})

export default router
