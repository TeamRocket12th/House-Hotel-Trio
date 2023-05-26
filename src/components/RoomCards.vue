<template>
  <ul class="hidden max-w-[825px] grid-cols-1 md:grid md:grid-cols-3">
    <li
      v-for="room in roomInfo"
      :key="room.id"
      @click="router.push(`/reservation/${room.id}`)"
      class="relative h-[275px] cursor-pointer"
    >
      <div class="flex h-full items-center justify-center bg-cover bg-center md:h-[275px]">
        <img :src="`${room.imageUrl}`" class="h-full w-full" />
      </div>
      <!-- 遮罩 -->
      <div
        class="group absolute top-0 flex h-full w-full items-center justify-center duration-300 hover:bg-primary hover:opacity-[0.6] md:h-[275px]"
      >
        <p class="name invisible absolute my-auto font-sans text-white group-hover:visible">
          {{ room.name }}
        </p>
      </div>
    </li>
  </ul>
  <!-- 手機板房間卡片輪播圖 -->
  <swiper
    class="swiper z-10 max-w-[98%] md:hidden"
    :modules="modules"
    :pagination="{ el: '.swiper-pagination', type: 'bullets', clickable: true }"
    :slides-per-view="1"
    :space-between="10"
  >
    <swiper-slide
      class="slide"
      v-for="room in roomInfo"
      :key="room.id"
      @click="router.push(`/reservation/${room.id}`)"
    >
      <div class="relative h-[275px] cursor-pointer overflow-hidden">
        <div class="flex h-full items-center justify-center bg-cover bg-center md:h-[275px]">
          <img :src="`${room.imageUrl}`" class="h-full w-full object-cover" />
        </div>
        <!-- 遮罩 -->
        <div
          class="group absolute top-0 flex h-full w-full items-center justify-center bg-gray-500 opacity-[0.6] duration-300 md:h-[275px]"
        >
          <p class="name absolute my-auto font-sans text-white group-hover:visible md:invisible">
            {{ room.name }}
          </p>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination roomcards-carousel"></div>
  </swiper>
</template>

<script setup>
import { apiGetAllrooms } from '../apis/api.js'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { errorAlert } from '../alert'
import { useLoaderStore } from '../stores/isLoading'
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
const { changeStateTrue } = useLoaderStore()
const { changeStateFalse } = useLoaderStore()

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay]
const router = useRouter()
const roomInfo = ref([])

const getAllrooms = async () => {
  try {
    const res = await apiGetAllrooms()
    if (res.status === 200) {
      roomInfo.value = res.data.items
      changeStateFalse()
    }
  } catch (err) {
    errorAlert(err.message)
  }
}

onMounted(() => {
  changeStateTrue()
  getAllrooms()
})
</script>
<style>
.roomcards-carousel > .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  border: 2px solid white;
}

.roomcards-carousel > .swiper-pagination-bullet-active {
  background-color: white;
}
</style>
