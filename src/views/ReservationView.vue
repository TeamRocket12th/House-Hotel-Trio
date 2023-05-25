<template>
  <LoadingItem />
  <div class="container relative mx-auto flex flex-wrap">
    <div class="sm:h-screen h-[80vh] w-full overflow-hidden md:w-[42%] md:pr-4">
      <RoomCarousel :room="room" v-if="room" @getShowModal="getShowModal" />
    </div>
    <div class="mb-4 h-screen w-full pl-2 pr-2 pt-4 md:w-[58%] md:overflow-y-auto md:pl-4 md:pr-0 md:pt-[120px]">
      <SingleRoomDetail :room="room" class="h-auto w-full" />
      <BookingCalendar :booked-date="bookedDate" />
    </div>
  </div>
  <div
    :class="formValue
      ? 'absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-30 h-full w-full bg-white/40 backdrop-invert backdrop-opacity-10 lg:left-1/2 lg:top-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%] md:h-[1950px] lg:h-full'
      : 'absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-30 h-full w-full bg-white/40 backdrop-invert backdrop-opacity-10 lg:left-1/2 lg:top-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%] md:h-[740px] lg:h-full'"
    v-if="switchForm" @click="getCloseModal">
    <div @click.stop :class="formValue
      ? 'container absolute left-1/2  top-[155%]  translate-x-[-50%] translate-y-[-50%] md:top-[65%]  md:translate-y-[-50%] z-30 mx-auto flex  flex-wrap lg:w-[1110px] lg:left-1/2 lg:top-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%]'
      : 'container absolute left-1/2  top-[50%]  translate-y-[-50%] translate-x-[-50%] md:top-[25%] md:translate-y-[-25%] z-30 mx-auto flex  flex-wrap lg:w-[1110px] lg:left-1/2 lg:top-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%]'
      ">
      <BookingForm @getCloseModal="getCloseModal" :room="room" :booked-date="bookedDate" :get-room-detail="getRoomDetail"
        @formValue="getFormValue" />
    </div>
  </div>
</template>

<script setup>
import BookingCalendar from '../components/BookingCalendar.vue'
import RoomCarousel from '../components/RoomCarousel.vue'
import BookingForm from '../components/BookingForm.vue'
import SingleRoomDetail from '../components/SingleRoomDetail.vue'
import LoadingItem from '../components/LoadingItem.vue'

import { useRoute } from 'vue-router'
import { apiGetSingleRoom } from '../apis/api'
import { onMounted, ref } from 'vue'
import { useDateStore } from '../stores/date'
import { storeToRefs } from 'pinia'
import { errorAlert } from '../alert'
import { useLoaderStore } from '../stores/isLoading'
const { changeStateTrue } = useLoaderStore()
const { changeStateFalse } = useLoaderStore()

const dateStore = useDateStore()
const { normalDayPrice, holidayPrice } = storeToRefs(dateStore)

const route = useRoute()
const roomId = `${route.params.id}`
const room = ref({})
const bookingInfo = ref([])
const bookedDate = ref([])

//打開預定表單
const switchForm = ref(false)
const getShowModal = () => {
  switchForm.value = !switchForm.value
}
//關閉表單
const getCloseModal = () => {
  switchForm.value = !switchForm.value
}

const updateBookingDate = (newDates) => {
  const datesArr = []
  newDates.forEach((booking) => {
    datesArr.push(booking.date)
  })
  return datesArr
}

const getRoomDetail = async () => {
  try {
    const res = await apiGetSingleRoom(roomId)
    if (res.status === 200) {
      room.value = await res.data.room[0]
      bookingInfo.value = await res.data.booking
      bookedDate.value = updateBookingDate(bookingInfo.value)
      normalDayPrice.value = room.value.normalDayPrice
      holidayPrice.value = room.value.holidayPrice
      changeStateFalse()
    }
  } catch (err) {
    errorAlert(err.message)
  }
}
const formValue = ref(true)
const getFormValue = (input) => {
  formValue.value = input
}
console.log(formValue)

onMounted(() => {
  changeStateTrue()
  getRoomDetail()
})
</script>
<style>
::-webkit-scrollbar {
  display: none;
}
</style>
