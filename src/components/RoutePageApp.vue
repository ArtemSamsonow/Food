<script setup>

</script>

<template>
  <div class="route">
    <h2 class="active">Корзина</h2>
    <div class="cycle">
      <div class="cycle__item passive" v-for="n in 18" :key = n></div>
    </div>
    <h2 class="passive">Оформление заказа</h2>
    <div class="cycle">
      <div class="cycle__item passive" v-for="n in 18" :key = n></div>
    </div>
    <h2 class="passive">Готово</h2>
  </div>
</template>

<style scoped lang="scss">
.route{
  display: flex;
  align-items: center;
  margin-top: 100px;
  .cycle{
    display: flex;
    margin: 0 20px 0 20px;
    .cycle__item{
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #CCCCCC;
      margin-right: 5px;
    }
  }
}

</style>