<template>
  <ul class="flex w-[830px] flex-wrap">
    <li
      v-for="room in roomInfo"
      :key="room.id"
      @click="router.push(`/reservation/${room.id}`)"
      class="relative h-[275px] w-[275px]"
    >
      <div class="`flex ` h-[275px] w-[275px] items-center justify-center bg-cover bg-center">
        <!-- bg-[url('${room.imageUrl}')] -->
        <img :src="`${room.imageUrl}`" class="h-full w-full" />
      </div>
      <!-- 遮罩 -->
      <div
        class="group absolute top-0 flex h-[275px] w-[275px] items-center justify-center hover:bg-primary hover:opacity-[0.6]"
      >
        <p class="name invisible absolute my-auto font-sans text-white group-hover:visible">
          {{ room.name }}
        </p>
      </div>

      <!-- {{ room.name }} -->
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
<style scoped>
/* .name {
  font: normal normal normal 19px/26px Open Sans;
} */
</style>
