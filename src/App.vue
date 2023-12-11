<script>
  import NavBar from "./shared/NavBar.vue"
  import FooTer from "./shared/FooTer.vue"
  import "bootstrap/dist/css/bootstrap.min.css"
  import "bootstrap"
  export default {
    components: {
      NavBar,
      FooTer
    }
  }
</script>

<template>
  <NavBar />
    <router-view />
  <FooTer />
</template>



