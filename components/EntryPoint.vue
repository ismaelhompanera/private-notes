<template>
  <component :is="component"></component>
</template>

<script>
import { mainRoute } from './../router/routes'

const App = resolve => {
  require.ensure(['./App.vue'], () => {
    resolve(require('./App.vue'))
  }, 'app')
}

export default {
  created () {
    this.$router.addRoutes(mainRoute)
    this.component = 'App'
  },
  data () {
    return {
      component: ''
    }
  },
  components: {
    App: App
  }
}
</script>
