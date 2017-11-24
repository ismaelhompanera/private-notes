import Vue from 'vue'
import VueRouter from 'vue-router'

import CreateNote from 'components/pages/CreateNote'
import ReadNote from 'components/pages/ReadNote'

Vue.use(VueRouter)

export const mainRoute = [
  {
    path: '/',
    name: 'create',
    components: {
      default: CreateNote
    }
  },
  {
    path: '/:id',
    name: 'note-view',
    components: {
      default: ReadNote
    }
  }
]

export const router = new VueRouter()
