<template>
  <HeadApp/>
  <route-page-app/>
  <card-basket-app/>
  <recommend-app/>
  <footer-app/>
</template>

<script>
import HeadApp from './components/HeadApp.vue'
import RoutePageApp from "@/components/RoutePageApp.vue";
import CardBasketApp from "@/components/CardBasketApp.vue";
import RecommendApp from "@/components/RecommendApp.vue";
import FooterApp from "@/components/FooterApp.vue";

export default {
  components: {
    HeadApp,
    RoutePageApp,
    CardBasketApp,
    RecommendApp,
    FooterApp
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
  a{
    text-decoration: none;
    color: #CC693E;
  }
  .active{
    color: black;
  }
  h2{
    font-size: 30px;
  }
  h3{
    font-size: 18px;
  }
  h4{
    margin-bottom: 15px;
  }
  p{
    font-size: 12px;
  }
  span{
    font-weight: bold;
  }
  .context{
    color: #666666;
  }
  .discount{
    color: #666666;
    text-decoration: line-through;
  }
  .passive{
    color: #CCCCCC;
  }
  .disabled{
    display: none;
  }
  .button--full{
    background-color: #CC693E;
    color: white;
    border-radius: 40px;
    padding: 10px;
    border: 0 solid white;
    cursor: pointer;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.16), 0 0 4px 0 rgba(0, 0, 0, 0.16), 0 1px 1px 0 rgba(0, 0, 0, 0.25);
  }
  .button--border{
    color: #CC693E;
    border: 2px solid #CC693E;
    background-color: white;
    border-radius: 40px;
    padding: 5px;
    cursor: pointer;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 0 4px 0 rgba(0, 0, 0, 0.16), 0 1px 1px 0 rgba(0, 0, 0, 0.20);
  }
  input{
    border-radius: 30px;
    border: 2px solid black;
    padding: 7px;
  }
}
</style>
