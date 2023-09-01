<script setup>
import {useVivatStore} from "@/storege/store";

const vivatStore = useVivatStore();
</script>

<template>
<div class="recommend">
  <h2>Рекомендуем</h2>
  <div class="recommend__card">
    <div class="recommend__card__item" v-for="card in vivatStore.basket" :key = "card.id">
      <img :src="card.image" alt="">
      <div class="recommend__card__item__text">
        <h4>{{ card.name }}</h4>
        <p class="context">{{ card.description }}</p>
        <button class="button--border">от {{card.price}} ₽</button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.recommend{
  margin-bottom: 100px;
  .recommend__card{
    display: flex;
    overflow: auto;
    padding-bottom: 50px;
    &::-webkit-scrollbar {
      height: 2px;
      border-radius: 20px;
    }
    &::-webkit-scrollbar-track{
      background-color: white;
    }
    &::-webkit-scrollbar-thumb{

      background-color: black;
    }
    .recommend__card__item{
      display: flex;
      flex-direction: column;
      width: 300px;
      height: 100%;
      background-color: #F1F1F1;
      border-radius: 8px;
      margin-right: 20px;
      img{
        border-radius: 8px 8px 0 0;
        width: 300px;
        object-fit: cover;
      }
      .recommend__card__item__text{
        padding: 10px;
        button{
          float: right;
          width: 100px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>