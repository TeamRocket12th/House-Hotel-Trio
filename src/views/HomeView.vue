<template>
  <main>
    <section class="container mx-auto flex h-screen items-center pl-32 pr-32">
      <div class="absolute bottom-0 left-0 right-0 top-0">
        <HomeCarousel />
      </div>
      <div class="z-10 flex w-full flex-wrap justify-between">
        <div class="z-10 sm:w-full md:w-auto">
          <img src="../assets/images/logo.svg" alt="logo" class="mb-[186px]" />
          <div class="text-xs text-white">
            <h1 class="mb-4">好室旅店。HOUSE HOTEL</h1>
            <p class="mb-2">花蓮縣花蓮市國聯一路1號</p>
            <p class="mb-2">03-8321155</p>
            <p class="mb-2">HOUSE@HOTEL.COM</p>
          </div>
        </div>
        <div class="z-10 text-white sm:w-full md:w-auto">
          <RoomCards />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import HomeCarousel from '../components/HomeCarousel.vue'
import RoomCards from '../components/RoomCards.vue'


</script>
