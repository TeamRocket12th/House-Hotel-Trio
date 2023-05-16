<template>
  <div class="container mx-auto flex flex-wrap">
    <div class="w-full md:w-[42%] md:pr-4">
      <RoomCarousel :room="room" />
    </div>

    <div class="w-full md:w-[58%] md:pl-4">
      <SingleRoomDetail :room="room" class="h-[500px] w-full" />
      <BookingCalendar />
    </div>
  </div>
</template>

<script setup>
import BookingCalendar from '../components/BookingCalendar.vue'
import RoomCarousel from '../components/RoomCarousel.vue'
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
const room = ref([])

const getRoomDetail = async () => {
  try {
    const res = await apiGetSingleRoom(roomId)

    if (res.status === 200) {
      room.value = await res.data.room[0]
      console.log(room.value)
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
