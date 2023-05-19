<template>
  <ul class="grid max-w-[825px] grid-cols-3">
    <li
      v-for="room in roomInfo"
      :key="room.id"
      @click="router.push(`/reservation/${room.id}`)"
      class="relative h-[275px] cursor-pointer"
    >
      <div class="flex h-[275px] items-center justify-center bg-cover bg-center">
        <img :src="`${room.imageUrl}`" class="h-full w-full" />
      </div>
      <!-- 遮罩 -->
      <div
        class="group absolute top-0 flex h-[275px] w-full items-center justify-center duration-300 hover:bg-primary hover:opacity-[0.6]"
      >
        <p class="name invisible absolute my-auto font-sans text-white group-hover:visible">
          {{ room.name }}
        </p>
      </div>
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
    console.log(res)
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
