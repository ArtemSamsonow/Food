<script setup>
import logoImg from "@/assets/Logo.svg";
import locateImg from "@/assets/locate.svg";
</script>

<template>
  <div class="header">

    <div class="header__logo">
      <img :src="logoImg" alt="Логотип компании">
    </div>

    <div class="header__locate">
      <img :src="locateImg" alt="">
      <p class = "context"><a href="">Ховрино </a>Круглосуточно</p>
      <h3>+7 (495) 980-66-22</h3>
    </div>

    <div class="header__locate">
      <img :src="locateImg" alt="">
      <p class="context"><a href="">Измайлово </a>Круглосуточно</p>
      <h3>+7 (495) 980-66-22</h3>
    </div>

    <div class="header__locate">
      <img :src="locateImg" alt="">
      <p class="context"><a href="">Мытищи </a>Круглосуточно</p>
      <h3>+7 (495) 980-66-22</h3>
    </div>

    <div class="header__locate">
      <img :src="locateImg" alt="">
      <p class="context"><a href="">Хор.-Мневники </a>Круглосуточно</p>
      <h3>+7 (495) 980-66-22</h3>
    </div>

  </div>
</template>

<style scoped lang="scss">
.header{
  display: flex;
  justify-content: space-around;
  padding: 30px 50px 0 50px;
  .header__locate{
    p{
      margin-left: 20px;
    }
    img{
      transform: translateY(17px);
    }
  }
}
</style>