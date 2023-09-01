<script setup>
import {useVivatStore} from "@/storege/store";
import PromoCodeApp from "@/components/PromoCodeApp.vue";
import ButtonCounterApp from "@/components/ButtonCounterApp.vue";


const vivatStore = useVivatStore()

</script>

<template>
<div class="basket">
    <div class="basket__cards">

      <div class="basket__card" v-for="card in vivatStore.basket.filter(item => !item.gift)" :key = "card.id">
        <img :src="card.image" alt="">
        <div class="basket__card__item">
          <div class="basket__card__item--delete">
            <h3>{{ card.name }}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0Z" fill="#999999"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.31066 7.18934C8.72487 6.60355 7.77513 6.60355 7.18934 7.18934C6.60355 7.77513 6.60355 8.72487 7.18934 9.31066L9.87868 12L7.18934 14.6893C6.60355 15.2751 6.60355 16.2249 7.18934 16.8107C7.77513 17.3964 8.72487 17.3964 9.31066 16.8107L12 14.1213L14.6893 16.8107C15.2751 17.3964 16.2249 17.3964 16.8107 16.8107C17.3964 16.2249 17.3964 15.2751 16.8107 14.6893L14.1213 12L16.8107 9.31066C17.3964 8.72487 17.3964 7.77513 16.8107 7.18934C16.2249 6.60355 15.2751 6.60355 14.6893 7.18934L12 9.87868L9.31066 7.18934Z" fill="#999999"/>
            </svg>
          </div>
          <p class="context">{{ card.description }}</p>
          <button-counter-app
          :price = card.price
          :discount = card.discount
          :counts = card.counts
          :id = card.id
          />
        </div>
      </div>
      <div class="basket__cards__gifts">
        <h2>Подарки</h2>

        <div class="basket__card" v-for="card in vivatStore.basket.filter(item => item.gift)" :key = "card.id">
          <img :src="card.image" alt="">
          <div class="basket__card__item">
            <div class="basket__card__item--delete">
              <h3>{{ card.name }}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0Z" fill="#999999"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.31066 7.18934C8.72487 6.60355 7.77513 6.60355 7.18934 7.18934C6.60355 7.77513 6.60355 8.72487 7.18934 9.31066L9.87868 12L7.18934 14.6893C6.60355 15.2751 6.60355 16.2249 7.18934 16.8107C7.77513 17.3964 8.72487 17.3964 9.31066 16.8107L12 14.1213L14.6893 16.8107C15.2751 17.3964 16.2249 17.3964 16.8107 16.8107C17.3964 16.2249 17.3964 15.2751 16.8107 14.6893L14.1213 12L16.8107 9.31066C17.3964 8.72487 17.3964 7.77513 16.8107 7.18934C16.2249 6.60355 15.2751 6.60355 14.6893 7.18934L12 9.87868L9.31066 7.18934Z" fill="#999999"/>
              </svg>
            </div>
            <p class="context">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  <PromoCodeApp/>
</div>
</template>

<style scoped lang="scss">
.basket{
  display: flex;
  .basket__card{
    display: flex;
    background-color: #F1F1F1;
    border-radius: 10px;
    margin: 40px 0 40px 0;
    img{
      border-radius: 10px 0 0 10px;
      width: 205px;
      height: 215px;
      object-fit: cover;
      margin-right: 20px;
    }
    .basket__card__item{
      padding: 15px;
      width: 100%;
      .basket__card__item--delete{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
    }
  }
}
</style>