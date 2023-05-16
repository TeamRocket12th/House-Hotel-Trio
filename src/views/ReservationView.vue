<template>
  <div class="container mx-auto flex flex-wrap relative">
    <div class="w-full md:w-[42%] md:pr-4">
      <RoomCarousel :room="room" @getShowModal="getShowModal" />
    </div>
    <div class="w-full md:w-[58%] md:pl-4">
      <BookingCalendar />
    </div>
  </div>
  <div
    class=" backdrop-opacity-10 backdrop-invert bg-white/40 w-full h-full absolute top-1/2 z-30 left-1/2 translate-x-[-50%] translate-y-[-50%]"
    v-if="switchForm" @click="getCloseModal">
    <div @click.stop
      class="container mx-auto flex flex-wrap w-[1110px] h-[600px]  absolute top-1/2 z-30 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <BookingForm @getCloseModal="getCloseModal" />
    </div>
  </div>
</template>

<script setup>
import BookingCalendar from '../components/BookingCalendar.vue'
import RoomCarousel from '../components/RoomCarousel.vue'
import BookingForm from '../components/BookingForm.vue'
import { useRoute } from 'vue-router'
import { apiGetSingleRoom } from '../apis/api'
import { onMounted, ref } from 'vue'
import { useDateStore } from '../stores/date'
import { storeToRefs } from 'pinia'
import { errorAlert } from '../alert'

const dateStore = useDateStore()
const { normalDayPrice, holidayPrice } = storeToRefs(dateStore)

const route = useRoute()
const roomId = `${route.params.id}`
const room = ref([])


//打開預定表單
const switchForm = ref(false)
const getShowModal = () => {
  switchForm.value = !switchForm.value;
}
//關閉表單
const getCloseModal = () => {
  switchForm.value = !switchForm.value;
}


const getRoomDetail = async () => {
  try {
    const res = await apiGetSingleRoom(roomId)
    if (res.status === 200) {
      room.value = await res.data.room[0]
      normalDayPrice.value = room.value.normalDayPrice
      holidayPrice.value = room.value.holidayPrice
    }
  } catch (err) {
    errorAlert(err.message)
  }
}

onMounted(() => {
  getRoomDetail()
})
</script>
