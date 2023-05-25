<template>
  <main>
    <LoadingItem />
    <section class="container mx-auto flex h-screen items-center md:pl-32 md:pr-32 pl-2 pr-2">
      <div class="absolute bottom-0 left-0 right-0 top-0 md:h-[135vh] h-[150vh]">
        <HomeCarousel />
      </div>
      <div class="2xl:mt-0 mt-10  z-10 flex flex-wrap w-full md:justify-between justify-center">
        <div class="z-10 w-auto xl:pt-0 md:pt-40 md:pb-0 pt-5 pb-5">
          <img src="../assets/images/logo.svg" alt="logo" class="2xl:mb-[186px] mb-5" />
          <div class="text-xs text-white">
            <h1 class="mb-4">好室旅店。HOUSE HOTEL</h1>
            <p class="mb-2">花蓮縣花蓮市國聯一路1號</p>
            <p class="mb-2">03-8321155</p>
            <p class="mb-2">HOUSE@HOTEL.COM</p>
          </div>
        </div>
        <div class="z-10 text-white w-[80%] xl:w-auto ">
          <RoomCards />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import HomeCarousel from '../components/HomeCarousel.vue'
import RoomCards from '../components/RoomCards.vue'
import LoadingItem from '../components/LoadingItem.vue'
</script>
