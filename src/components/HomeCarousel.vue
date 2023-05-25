<template>
  <swiper class="swiper absolute -z-20 mx-auto md:h-[135vh] h-[150vh] w-screen" :modules="modules"
    :pagination="{ el: '.swiper-pagination', type: 'bullets', clickable: true }" :speed="1000" :loop="true"
    :autoplay="{ delay: 3000 }" id="homeCarousel">
    <swiper-slide class="slide">
      <div class="relative overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <div
          class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-hidden bg-black bg-fixed opacity-60">
        </div>
        <div
          class="md:h-[135vh] h-[150vh] w-full bg-[url('@/assets/images/house/homeCarouselFirst.jpeg')] bg-cover bg-center bg-no-repeat">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="slide">
      <div class="relative overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <div
          class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-hidden bg-black bg-fixed opacity-60">
        </div>
        <div
          class="md:h-[135vh] h-[150vh] w-full bg-[url('@/assets/images/house/homeCarouselSecond.jpeg')] bg-cover bg-center bg-no-repeat">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="slide">
      <div class="relative overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <div
          class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-hidden bg-black bg-fixed opacity-60">
        </div>
        <div
          class="md:h-[135vh] h-[150vh] w-full bg-[url('@/assets/images/house/homeCarouselThird.jpeg')] bg-cover bg-center bg-no-repeat">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="slide">
      <div class="relative overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <div
          class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-hidden bg-black bg-fixed opacity-60">
        </div>
        <div
          class="md:h-[135vh] h-[150vh] w-full bg-[url('@/assets/images/house/homeCarouselFourth.jpeg')] bg-cover bg-center bg-no-repeat">
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination home-carousel"></div>
  </swiper>
</template>
<script setup>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay]
</script>

<style>
.swiper-pagination.home-carousel {
  left: 168px;
  z-index: 20;
  text-align: left;
  padding-bottom: 46px;
  max-width: 1366px;
  padding-left: 128px;
  padding-right: 128px;
}

.home-carousel>.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  border: 2px solid white;
}

.home-carousel>.swiper-pagination-bullet-active {
  background-color: white;
}
</style>
