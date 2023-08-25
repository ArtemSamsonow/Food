<script setup>

</script>

<template>
<div class="basket__card__counter">

  <div class="basket__card__counter__price">
    <span class="disabled"></span>
    <span>800 ₽</span>
  </div>

  <div class="basket__card__counter__count">
    <button class="button--border left">+</button>
    <div class="count">1</div>
    <button class="button--border right">-</button>
  </div>

  <div class="basket__card__counter__newPrice">
    <span class="disabled"></span>
    <span>800 ₽</span>
  </div>
</div>
</template>

<style scoped lang="scss">
.basket__card__counter{
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 25px;
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