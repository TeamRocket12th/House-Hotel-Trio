// 單一房型資訊
<template>
  <div class="detail pl-7 text-primary" v-if="props.room.length !== 0">
    <div class="mb-[47px] flex justify-between">
      <h1 class="text-4xl">{{ props.room.name }}</h1>
      <ul class="flex text-xs font-bold">
        <li>{{ props.room.descriptionShort.GuestMax }}人・</li>

        <li>{{ props.room.descriptionShort.GuestMax === 1 ? '單人床' : '雙人床' }}・</li>

        <li>{{ props.room.amenities.Breakfast === true ? '附早餐' : '不附早餐' }}・</li>
        <li>衛浴{{ props.room.descriptionShort['Private-Bath'] }}間・</li>
        <li>{{ props.room.descriptionShort.Footage }}平方公尺</li>
      </ul>
    </div>
    <ul class="mb-[35px] text-xs">
      <li>
        平日（一～四）價格：{{ props.room.normalDayPrice }} / 假日（五〜日）價格：{{
          props.room.holidayPrice
        }}
      </li>
      <li>
        入住時間：{{ props.room.checkInAndOut.checkInEarly }}（最早）/
        {{ props.room.checkInAndOut.checkInLate }}（最晚）
      </li>
      <li>退房時間：{{ props.room.checkInAndOut.checkOut }}</li>
    </ul>
    <ul class="mb-8 text-xs font-light">
      <li>
        ・{{ props.room.descriptionShort.GuestMax === 1 ? '單人間' : '多人間' }}僅供{{
          props.room.descriptionShort.GuestMax
        }}位客人使用。
      </li>
      <li>
        ・臥室配有{{ props.room.descriptionShort.GuestMax === 1 ? '單人床' : '雙人床' }}和{{
          props.room.descriptionShort['Private-Bath'] == true ? '私人浴室' : ''
        }}。
      </li>
      <li>・您需要的一切為您準備：床單和毯子，毛巾，肥皂和洗髮水，吹風機</li>
      <li>・房間裡有AC，當然還有WiFi。</li>
    </ul>
    <ul class="grid grid-cols-6 flex-wrap">
      <li v-for="(item, index) in amenitiesArr" :key="index" class="relative mb-[25px]">
        <div
          :class="`absolute z-10 h-full w-full bg-white filter ${
            mask(item) ? 'opacity-0' : 'opacity-80'
          }`"
        ></div>
        <div class="flex flex-col items-center justify-center">
          <div class="mb-2 flex h-[40px] items-center">
            <img :src="getPath(item)" alt="" class="h-auto" />
          </div>

          <p class="text-xs">{{ translate(item) }}</p>
        </div>

        <img :src="getCheck(item)" alt="" class="absolute right-5 top-0" />
      </li>
    </ul>
  </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  room: {
    required: true
  }
})

const amenitiesArr = computed(() => {
  return Object.keys(props.room.amenities)
})

const amenitiesValueArr = computed(() => {
  return Object.values(props.room.amenities)
})

const getPath = (input) => {
  let base = './src/assets/images/amenities/icon_amenities_'
  return `${base}${input}.svg`
}
const translate = (input) => {
  let chArr = [
    'Wi-fi',
    '早餐',
    'Mini-Bar',
    'Room-Service',
    '電話',
    '空調',
    '冰箱',
    '沙發',
    '漂亮的視野',
    '全面禁菸',
    '適合兒童',
    '攜帶寵物'
  ]
  let index = amenitiesArr.value.indexOf(input)
  return chArr[index]
}
const getCheck = (input) => {
  let index = amenitiesArr.value.indexOf(input)
  if (amenitiesValueArr.value[index] === true) {
    return './src/assets/images/amenities/icons-ok.svg'
  } else {
    return './src/assets/images/amenities/icons-cancel.svg'
  }
}
const mask = (input) => {
  let index = amenitiesArr.value.indexOf(input)
  if (amenitiesValueArr.value[index] === true) {
    return true
  } else {
    return false
  }
}
</script>
