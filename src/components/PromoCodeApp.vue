<script setup>
import {useVivatStore} from "@/storege/store";

const vivatStore = useVivatStore();
</script>

<template>
<div class="basket__promoCode">

  <div class="basket__promoCode__scores">
    <h3>+358 баллов</h3>
    <p>Баллы начисляются в течении двух дней и доступны для использования при заказе от 500 руб. Только для зарегистрированных пользователей. <br><br> Зарегистрируйтесь или войдите.</p>
  </div>

  <div class="basket__promoCode__promo">
    <h3>Промокод</h3>
    <input placeholder="Введите промокод">
    <button class="button--border">Применить</button>
  </div>

  <h4>Сумма заказа: <span class="discount">{{vivatStore.priceNoDiscount}}</span> {{vivatStore.finalPrice}} ₽</h4>
  <button class="button--full">Далее</button>

</div>
</template>

<style scoped lang="scss">
.basket__promoCode{
  position: sticky;
  width: 511px;
  height: 420px;
  border: 1px solid #CCCCCC;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.16), 0 0 4px 0 rgba(0, 0, 0, 0.16), 0 1px 1px 0 rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 40px;
  margin: 40px 0 0 40px;

  .basket__promoCode__promo{
    margin-bottom: 50px;
  }
  h3{
    padding-bottom: 20px;
  }
  p{
    padding-bottom: 40px;
  }
  input{
    width: 100%;
    margin-bottom: 10px;
  }

  .button--border{
    width: 130px;
    float: right;
  }
  .button--full{
    width: 100%;
    margin-top: 30px;
    padding: 20px;
  }
}
</style>