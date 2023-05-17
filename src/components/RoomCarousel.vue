<template>
  <div v-if="imgfullScreen">
    <teleport to="body">
      <div class="album-mask absolute left-0 top-0 h-full w-full" @click="toggleImgFullScreen">
        <swiper
          :modules="modules"
          :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn', clickable: true }"
          :speed="800"
        >
          <swiper-slide v-for="(url, index) in props.room.imageUrl" :key="index">
            <div class="relative mx-auto flex h-screen justify-center pb-[76px] pt-[76px]">
              <img :src="url" alt="room-photo" class="block" @click.stop />
            </div>
          </swiper-slide>
          <div
            class="prev-btn absolute left-32 top-[50%] z-50 cursor-pointer hover:scale-110"
            @click.stop
          >
            <img src="../assets/images/albumleft.svg" alt="albumArrow" />
          </div>
          <div
            class="next-btn absolute right-32 top-[50%] z-50 cursor-pointer hover:scale-110"
            @click.stop
          >
            <img src="../assets/images/albumright.svg" alt="albumRight" />
          </div>
        </swiper>
      </div>
    </teleport>
  </div>
  <div v-else class="relative">
    <swiper
      :modules="modules"
      :pagination="{ el: '.swiper-pagination', type: 'bullets', clickable: true }"
      :autoplay="{ delay: 2000 }"
      :speed="1000"
      :loop="true"
      class="h-screen"
    >
      <swiper-slide v-for="(url, index) in props.room.imageUrl" :key="index">
        <div class="image-mask pointer-events-none absolute h-full w-full"></div>
        <img :src="url" alt="room-photo" class="h-full w-full object-cover" />
      </swiper-slide>
      <div class="swiper-pagination room-carousel"></div>
    </swiper>

    <div
      class="absolute bottom-0 left-0 right-0 top-0 z-10 flex cursor-pointer flex-col"
      @click="toggleImgFullScreen"
    >
      <div
        class="absolute left-32 right-[343px] top-20 z-10 flex items-center gap-2 whitespace-nowrap text-sm text-primary"
      >
        <img src="../assets/images/back home.png" alt="back-arrow" />
        <RouterLink to="/">查看其他房型</RouterLink>
      </div>
      <div class="mx-auto mt-[556px] max-w-[44%]">
        <p class="mb-3 text-center text-4xl text-primary">
          ${{ bookingDate.totalPrice }} <span class="ml-3 text-lg text-primary lg:text-xl">／</span
          ><span class="ml-4 text-xl text-primary">{{ bookingDate.totalNights }}晚</span>
        </p>
        <button
          class="flex w-full justify-center bg-primary py-2 text-center text-xl font-semibold text-white hover:bg-secondary lg:whitespace-nowrap lg:px-16"
          @click.stop
        >
          Booking now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

import { ref } from 'vue'
import { useDateStore } from '../stores/date'
import { storeToRefs } from 'pinia'

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay]

const props = defineProps({
  room: {
    type: Object,
    default: () => {},
    required: true
  }
})
const dateStore = useDateStore()
const { bookingDate } = storeToRefs(dateStore)

const imgfullScreen = ref(false)
const toggleImgFullScreen = () => {
  imgfullScreen.value = !imgfullScreen.value
}
</script>

<style>
.album-mask {
  background-color: rgba(0, 0, 0, 0.5);
}
.image-mask {
  background: transparent linear-gradient(180deg, #ffffff00 0%, #ffffff 100%) 0% 0% no-repeat
    padding-box;
}
.swiper-pagination.room-carousel {
  text-align: center;
  padding-bottom: 47px;
}
.room-carousel > .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  border: 2px solid #868f6c;
}
.room-carousel > .swiper-pagination-bullet-active {
  background-color: #868f6c;
}
.swiper-button-disabled {
  opacity: 0.3;
}
</style>
