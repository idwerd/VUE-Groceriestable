import Create from './pages/Create.vue'
import Edit from './pages/Edit.vue'
import Overview from './pages/Overview.vue'

export const routes = [
  { path: '/', component: Overview },
  { path: '/edit', component: Edit },
  { path: '/create', component: Create },
]
