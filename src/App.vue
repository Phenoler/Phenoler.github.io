<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

