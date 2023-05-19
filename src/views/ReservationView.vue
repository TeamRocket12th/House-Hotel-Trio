<template>
  <div class="container relative mx-auto flex flex-wrap">
    <div class="h-screen w-full overflow-hidden md:w-[42%] md:pr-4">
      <RoomCarousel :room="room" v-if="room" @getShowModal="getShowModal" />
    </div>
    <div class="right-0 h-screen w-full overflow-y-auto pt-[120px] md:w-[58%] md:pl-4">
      <SingleRoomDetail :room="room" class="h-auto w-full" />
      <BookingCalendar :booking-date="bookingDate" />
      <!-- @emit-info="getSelectRange"-->
    </div>
  </div>
  <div
    class="absolute left-1/2 top-1/2 z-30 h-full w-full translate-x-[-50%] translate-y-[-50%] bg-white/40 backdrop-invert backdrop-opacity-10"
    v-if="switchForm"
    @click="getCloseModal"
  >
    <div
      @click.stop
      class="container absolute left-1/2 top-1/2 z-30 mx-auto flex h-[600px] w-[1110px] translate-x-[-50%] translate-y-[-50%] flex-wrap"
    >
      <BookingForm @getCloseModal="getCloseModal" :room="room" />
    </div>
  </div>
</template>

<script setup>
import BookingCalendar from '../components/BookingCalendar.vue'
import RoomCarousel from '../components/RoomCarousel.vue'
import BookingForm from '../components/BookingForm.vue'
import SingleRoomDetail from '../components/SingleRoomDetail.vue'
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
const room = ref({})
const bookingDate = ref([])

//打開預定表單
const switchForm = ref(false)
const getShowModal = () => {
  switchForm.value = !switchForm.value
}
//關閉表單
const getCloseModal = () => {
  switchForm.value = !switchForm.value
}

const getRoomDetail = async () => {
  try {
    const res = await apiGetSingleRoom(roomId)

    if (res.status === 200) {
      room.value = await res.data.room[0]
      bookingDate.value = await res.data.booking
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
<style>
::-webkit-scrollbar {
  display: none;
}
</style>
