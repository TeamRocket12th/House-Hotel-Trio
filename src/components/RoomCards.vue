<template>
  <ul>
    <li v-for="room in roomInfo" :key="room.id" @click="router.push(`/reservation/${room.id}`)">
      {{ room.name }}
    </li>
  </ul>
</template>

<script setup>
import { apiGetAllrooms } from '../apis/api.js'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { errorAlert } from '../alert'

const router = useRouter()
const roomInfo = ref([])

const getAllrooms = async () => {
  try {
    const res = await apiGetAllrooms()
    if (res.status === 200) {
      roomInfo.value = res.data.items
    }
  } catch (err) {
    errorAlert(err.message)
  }
}

onMounted(() => {
  getAllrooms()
})
</script>
