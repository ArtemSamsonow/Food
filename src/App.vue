<template>
  <HeadApp></HeadApp>
</template>

<script>
import HeadApp from './components/HeadApp.vue'

export default {
  components: {
    HeadApp
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  font-family: 'Roboto Slab', serif;
}
body{
  width: 100%;
}
.app{
  padding: 30px 50px 0 50px;
  a{
    text-decoration: none;
    color: #CC693E;
  }
  h3{
    font-size: 18px;
  }
  p{
    font-size: 12px;
  }
  .context{
    color: #666666;
  }
}
</style>
