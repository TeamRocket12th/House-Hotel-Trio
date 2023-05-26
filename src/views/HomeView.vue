<template>
  <main>
    <LoadingItem />
    <section class="container mx-auto flex h-screen items-center pl-2 pr-2 md:pl-32 md:pr-32">
      <div class="absolute bottom-0 left-0 right-0 top-0 h-[150vh] md:h-[135vh] lg:h-screen">
        <HomeCarousel />
      </div>
      <Transition name="fade">
        <div class="2xl:mt-0 z-10 mt-10 flex w-full flex-wrap justify-center md:justify-between">
          <HotelInfo />
          <div class="z-10 w-[80%] text-white xl:w-auto">
            <RoomCards />
          </div>
        </div>
      </Transition>
    </section>
  </main>
</template>

<script setup>
import HomeCarousel from '../components/HomeCarousel.vue'
import RoomCards from '../components/RoomCards.vue'
import LoadingItem from '../components/LoadingItem.vue'
import HotelInfo from '../components/HotelInfo.vue'
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
