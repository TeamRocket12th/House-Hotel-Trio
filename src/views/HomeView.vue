<template>
  <main>
    <LoadingItem />
    <section class="container mx-auto flex h-screen items-center pl-2 pr-2 md:pl-32 md:pr-32">
      <div class="absolute bottom-0 left-0 right-0 top-0 h-[150vh] md:h-[135vh] lg:h-screen">
        <HomeCarousel />
      </div>
      <div class="2xl:mt-0 z-10 mt-10 flex w-full flex-wrap justify-center md:justify-between">
        <div class="z-10 w-full pb-5 pt-5 text-center md:w-auto md:pb-0 md:pt-40 xl:pt-0">
          <img
            src="../assets/images/logo.svg"
            alt="logo"
            class="2xl:mb-[186px] mx-auto mb-10 md:mb-5"
          />
          <div class="text-xs text-white">
            <h1 class="mb-4">好室旅店。HOUSE HOTEL</h1>
            <p class="mb-2">花蓮縣花蓮市國聯一路1號</p>
            <p class="mb-2">03-8321155</p>
            <p class="mb-2">HOUSE@HOTEL.COM</p>
          </div>
        </div>
        <div class="z-10 w-[80%] text-white xl:w-auto">
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
