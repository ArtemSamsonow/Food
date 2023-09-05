<script setup>
import {useVivatStore} from "@/storege/store";


const vivatStore = useVivatStore();



// eslint-disable-next-line no-undef
defineProps({
  price: Number,
  discount: Number,
  counts: Number,
  id: Number
});

function plus (id) {
  const element = {id: id},
      indexProduct = vivatStore.basket.findIndex(obj => obj.id === element.id);
  vivatStore.basket[indexProduct].counts += 1;
}

function minus (id) {
  const element = {id: id},
      indexProduct = vivatStore.basket.findIndex(obj => obj.id === element.id);
  if (vivatStore.basket[indexProduct].counts <= 1){
    vivatStore.basket[indexProduct].counts = 1;
  }else {
    vivatStore.basket[indexProduct].counts -= 1;
  }
}

</script>

<template>
<div class="basket__card__counter">

  <div class="basket__card__counter__price">
    <span class="disabled" v-if="discount === 0"></span>
    <span class="discount" v-else>{{ price }}</span>
    <span>&ensp; {{ price - discount }} ₽</span>
  </div>

  <div class="basket__card__counter__count">
    <button class="button--border left" v-on:click="minus(id)">-</button>
    <div class="count">{{ counts }}</div>
    <button class="button--border right" v-on:click="plus(id)">+</button>
  </div>

  <div class="basket__card__counter__newPrice">
    <span class="disabled" v-if="discount === 0"></span>
    <span class="discount" v-else>{{ price * counts}}</span>
    <span class="finalPrice">&ensp; {{ (price - discount) * counts }} ₽</span>
  </div>
</div>
</template>

<style scoped lang="scss">
.basket__card__counter{
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 60px;
  .basket__card__counter__count{
    display: flex;
    margin: 0 20px 0 20px;
    .count{
      padding: 7px 15px 7px 15px;
      background-color: white;
      border-top: 2px solid #CC693E;
      border-bottom: 2px solid #CC693E;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 0 4px 0 rgba(0, 0, 0, 0.16), 0 1px 1px 0 rgba(0, 0, 0, 0.20);
    }
    .button--border{
      padding: 7px 15px 7px 15px;
    }
    .left{
      border-radius: 20px 0 0 20px;
    }
    .right{
      border-radius: 0 20px 20px 0;
    }
  }
}
</style>