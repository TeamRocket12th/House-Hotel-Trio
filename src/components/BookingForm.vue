<template>
  <div class="flex w-full items-stretch justify-between border border-primary bg-white font-tc" v-if="form">
    <div class="w-[445px] bg-primary">
      <div class="px-[65px] pb-[26px] pt-[50px]">
        <VForm action="" class="">
          <label>
            <div for="name" class="text-[14px] text-white">
              <span>姓名</span>

              <span class="hidden text-red-400">此欄位為必填</span>
            </div>
            <VField :rules="{ required }" label="姓名" name="name" type="text" id="name"
              class="mt-[7px] h-[38px] w-[315px] p-2 outline-none" placeholder="請填寫預定人姓名" />
            <ErrorMessage name="name" class="text-yellow-400" />
          </label>
          <label>
            <div for="name" class="mt-4 text-[14px] text-white">
              <span>手機號碼</span>
              <span class="hidden text-red-400">此欄位為必填</span>
            </div>
            <VField name="phone" label="手機號碼" type="tel" :rules="isPhone" id="name"
              class="mt-[7px] h-[38px] w-[315px] p-2 outline-none" placeholder="請填寫預定人手機號碼" />
            <ErrorMessage name="phone" class="text-yellow-400" />
          </label>
          <div class="mt-4">
            <label for="" class="mt-4 text-[14px] text-white">入住日期 </label>
            <VDatePicker v-model="stayPeriod.start" locale="en" :select-attribute="attribute" :masks="{ weekdays: 'WW' }"
              :min-date="minDate()" :max-date="maxDate()" is-required>
              <template #default="{ inputValue, inputEvents }">
                <input :value="inputValue" v-on="inputEvents"
                  class="mt-[7px] block h-[38px] w-[315px] p-2 font-normal outline-none" placeholder="請填寫入住日期" />
              </template>
            </VDatePicker>
          </div>
          <div class="mt-4">
            <label for="" class="text-[14px] text-white">退房日期</label>
            <VDatePicker v-model="stayPeriod.end" locale="en" :select-attribute="attribute" :masks="{ weekdays: 'WW' }"
              :min-date="minDate()" :max-date="maxDate()" is-required>
              <template #default="{ inputValue, inputEvents }">
                <input :value="inputValue" v-on="inputEvents"
                  class="mt-[7px] block h-[38px] w-[315px] p-2 font-normal outline-none" placeholder="請填寫退房日期" />
              </template>
            </VDatePicker>
          </div>
          <div v-if="bookingDate.totalDays" class="mt-4 w-full border-b border-[#949C7C] pb-[14px] text-[#949C7C]">
            <p v-if="showWeekdays">
              {{ bookingDate.totalDays }}天，{{ bookingDate.weekdays }}晚平日
            </p>
            <p v-if="showWeekends">
              {{ bookingDate.totalDays }}天，{{ bookingDate.weekdays }}晚平日，{{
                bookingDate.weekends
              }}晚假日
            </p>
            <span v-if="showError" class="text-yellow-400">請先輸入預定日期</span>
          </div>
          <div class="mt-4 text-right text-white">
            <p class="text-sm">總計</p>
            <p class="openSans text-[26px] font-semibold">${{ bookingDate.totalPrice }}</p>
          </div>
          <button type="button"
            class="hover:duration-totalDay00 mt-4 w-full border border-white py-2 text-[18px] font-bold text-white hover:bg-white hover:text-primary"
            @click.prevent="resultBack">
            確認送出
          </button>
          <p class="mt-[18px] text-center text-xs text-white">
            此預約系統僅預約功能，並不會對您進行收費
          </p>
        </VForm>
      </div>
    </div>

    <div class="relative mt-[50px] w-full px-[30px] pr-[100px] text-primary">
      <img src="../assets/images/icons8-cancel.png" @click="closeModal" alt="icon"
        class="absolute right-[38px] cursor-pointer" />
      <div class="mt-2 flex items-center">
        <h2 class="inline-block whitespace-nowrap text-2xl font-black">{{ props.room.name }}</h2>
        <div class="ml-2 h-[1px] w-[80%] border-b"></div>
      </div>
      <p class="mt-2 text-sm leading-[1.7]">
        {{ props.room.descriptionShort.GuestMax }}人・
        {{ props.room.descriptionShort.Bed[0] === 'Single' ? '單人床' : '雙人床' }}・
        {{ props.room.amenities.Breakfast ? '附早餐・' : '不附早餐・' }}
        衛浴{{ props.room.descriptionShort['Private-Bath'] }}間・
        {{ props.room.descriptionShort.Footage }}平方公尺<br />
        平日（一～四）價格：{{ props.room.normalDayPrice }} / 假日（五〜日）價格：{{
          props.room.holidayPrice
        }}
      </p>
      <ul class="my-[26px] flex flex-wrap gap-x-[30px]">
        <li :class="
          usableAmenitiesArr.length > 7
            ? 'flex w-[60px] flex-col items-center py-2 text-[10px] text-primary '
            : 'flex flex-col items-center py-1 text-[10px] text-primary'
        " v-if="props.room.amenities['Air-Conditioner']">
          <img src="../assets/images/amenities/icon_amenities_Air-Conditioner.svg" alt="icon" class="h-[30px] w-[30px]" />
          <p class="mt-2 text-[#949C7C]">空調</p>
        </li>
        <li :class="
          usableAmenitiesArr.length > 7
            ? 'flex w-[60px] flex-col items-center py-2 text-[10px] text-primary '
            : 'flex flex-col items-center py-1 text-[10px] text-primary'
        " v-if="props.room.amenities['Breakfast']">
          <img src="../assets/images/amenities/icon_amenities_Breakfast.svg" alt="icon" class="h-[30px] w-[30px]" />
          <p class="mt-2 text-[#949C7C]">早餐</p>
        </li>
        <li :class="
          usableAmenitiesArr.length > 7
            ? 'flex w-[60px] flex-col items-center py-2 text-[10px] text-primary '
            : 'flex flex-col items-center py-1 text-[10px] text-primary'
        " v-if="props.room.amenities['Child-Friendly']">
          <img src="../assets/images/amenities/icon_amenities_Child-Friendly.svg" alt="icon" class="h-[30px] w-[30px]" />
          <p class="mt-2 text-[#949C7C]">適合小孩</p>
        </li>
        <li :class="
          usableAmenitiesArr.length > 7
            ? 'flex w-[60px] flex-col items-center py-2 text-[10px] text-primary '
            : 'flex flex-col items-center py-1 text-[10px] text-primary'
        " v-if="props.room.amenities['Great-View']">
          <img src="../assets/images/amenities/icon_amenities_Great-View.svg" alt="icon" class="h-[30px] w-[30px]" />
          <p class="mt-2 text-[#949C7C]">美麗的風景</p>
        </li>
        <li :class="
          usableAmenitiesArr.length > 7
            ? 'flex w-[60px] flex-col items-center py-2 text-[10px] text-primary '
            : 'flex flex-col items-center py-1 text-[10px] text-primary'
        " v-if="props.room.amenities['Mini-Bar']">
          <img src="../assets/images/amenities/icon_amenities_Mini-Bar.svg" alt="icon" class="h-[30px] w-[30px]" />
          <p class="mt-2 text-[#949C7C]">Mini Bar</p>
        </li>
        <li :class="
          usableAmenitiesArr.length > 7
            ? 'flex w-[60px] flex-col items-center py-2 text-[10px] text-primary '
            : 'flex flex-col items-center py-1 text-[10px] text-primary'
        " v-if="props.room.amenities['Pet-Friendly']">
          <img src="../assets/images/amenities/icon_amenities_Pet-Friendly.svg" alt="icon" class="h-[30px] w-[30px]" />
          <p class="mt-2 text-[#949C7C]">攜帶寵物</p>
        </li>
        <li :class="
          usableAmenitiesArr.length > 7
            ? 'flex w-[60px] flex-col items-center py-2 text-[10px] text-primary '
            : 'flex flex-col items-center py-1 text-[10px] text-primary'
        " v-if="props.room.amenities['Refrigerator']">
          <img src="../assets/images/amenities/icon_amenities_Refrigerator.svg" alt="icon" class="h-[30px] w-[30px]" />
          <p class="mt-2 text-[#949C7C]">冰箱</p>
        </li>
        <li :class="
          usableAmenitiesArr.length > 7
            ? 'flex w-[60px] flex-col items-center py-2 text-[10px] text-primary '
            : 'flex flex-col items-center py-1 text-[10px] text-primary'
        " v-if="props.room.amenities['Room-Service']">
          <img src="../assets/images/amenities/icon_amenities_Room-Service.svg" alt="icon" class="h-[30px] w-[30px]" />
          <p class="mt-2 text-[#949C7C]">客房服務</p>
        </li>
        <li :class="
          usableAmenitiesArr.length > 7
            ? 'flex w-[60px] flex-col items-center py-2 text-[10px] text-primary '
            : 'flex flex-col items-center py-1 text-[10px] text-primary'
        " v-if="props.room.amenities['Smoke-Free']">
          <img src="../assets/images/amenities/icon_amenities_Smoke-Free.svg" alt="icon" class="h-[30px] w-[30px]" />
          <p class="mt-2 text-[#949C7C]">全面禁菸</p>
        </li>
        <li :class="
          usableAmenitiesArr.length > 7
            ? 'flex w-[60px] flex-col items-center py-2 text-[10px] text-primary '
            : 'flex flex-col items-center py-1 text-[10px] text-primary'
        " v-if="props.room.amenities['Sofa']">
          <img src="../assets/images/amenities/icon_amenities_Sofa.svg" alt="icon" class="h-[30px] w-[30px]" />
          <p class="mt-2 text-[#949C7C]">沙發</p>
        </li>
        <li :class="
          usableAmenitiesArr.length > 7
            ? 'flex w-[60px] flex-col items-center py-2 text-[10px] text-primary '
            : 'flex flex-col items-center py-1 text-[10px] text-primary'
        " v-if="props.room.amenities['Television']">
          <img src="../assets/images/amenities/icon_amenities_Television.svg" alt="icon" class="h-[30px] w-[30px]" />
          <p class="mt-2 text-[#949C7C]">電話</p>
        </li>
        <li :class="
          usableAmenitiesArr.length > 7
            ? 'flex w-[60px] flex-col items-center py-2 text-[10px] text-primary '
            : 'flex flex-col items-center py-1 text-[10px] text-primary'
        " v-if="props.room.amenities['Wi-Fi']">
          <img src="../assets/images/amenities/icon_amenities_Wi-Fi.svg" alt="icon" class="h-[30px] w-[30px]" />
          <p class="mt-2 text-[#949C7C]">WIFI</p>
        </li>
      </ul>
      <div class="mt-2 flex items-center">
        <h3 class="inline-block whitespace-nowrap text-[16px] font-black">訂房資訊</h3>
        <div class="ml-2 h-[1px] w-[100%] border-b"></div>
      </div>
      <ul class="my-[12px] text-[10px]">
        <li class="py-[2px]">
          ・入住時間：最早{{ props.room.checkInAndOut.checkInEarly }}，最晚{{
            props.room.checkInAndOut.checkInLate
          }}；退房時間：{{ props.room.checkInAndOut.checkOut }}，請自行確認行程安排。
        </li>
        <li class="mt-[6px] py-[2px]">・平日定義週一至週四；假日定義週五至週日及國定假日。</li>
        <li class="mt-[6px] py-[2px]">
          ・好室旅店{{
            props.room.amenities['Smoke-Free'] === true ? '全面禁止吸菸。' : '房間內可吸菸。'
          }}
        </li>
        <li class="mt-[6px] py-[2px]">
          ・若您有任何問題，歡迎撥打 03-8321155 ( 服務時間 週一至週六 10:00 - 18:00 )。
        </li>
      </ul>
      <div class="mt-2 flex items-center">
        <h3 class="inline-block whitespace-nowrap text-[16px] font-black">預約流程</h3>
        <div class="ml-2 h-[1px] w-[100%] border-b"></div>
      </div>
      <ul class="my-[19px] flex items-start justify-between">
        <li class="rounded-b-lg border border-[#949C7C] text-center">
          <div class="flex h-[50px] w-[160px] items-center justify-center bg-[#949C7C]">
            <img src="../assets/images/amenities/reservationflow_step_1.svg" alt="icon" />
          </div>
          <div class="my-[12px] h-[64px] w-[160px] px-2 text-[10px]">送出線上預約單</div>
        </li>
        <img src="../assets/images/amenities/icon_datepicker_arrow_right.svg" alt="icon" class="mt-5" />
        <li class="rounded-b-lg border border-[#949C7C] text-center">
          <div class="flex h-[50px] w-[160px] items-center justify-center bg-[#949C7C]">
            <img src="../assets/images/amenities/reservationflow_step_2.svg" alt="icon" />
          </div>
          <div class="my-[12px] h-[64px] w-[160px] px-2 text-[10px]">
            系統立即回覆是否預訂成功 並以簡訊發送訂房通知 <br />(若未收到簡訊請來電確認)
          </div>
        </li>
        <img src="../assets/images/amenities/icon_datepicker_arrow_right.svg" alt="icon" class="mt-5" />
        <li class="rounded-b-lg border border-[#949C7C] text-center">
          <div class="flex h-[50px] w-[160px] items-center justify-center bg-[#949C7C]">
            <img src="../assets/images/amenities/reservationflow_step_3.svg" alt="icon" />
          </div>
          <div class="my-[12px] h-[64px] w-[160px] px-2 text-[10px]">
            入住當日憑訂房通知 以現金或刷卡付款即可 <br />(僅接受VISA.JCB.銀聯卡)
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div v-if="success"
    class="relative flex h-[600ppx] w-full flex-col items-center justify-center border border-primary bg-primary text-center font-tc text-white">
    <button type="button" @click="closeModal" class="absolute right-[39px] top-[39px] cursor-pointer">
      <img src="../assets/images/icons8-cancel-white.png" alt="icon" />
    </button>
    <div class="flex">
      <img src="../assets/images/amenities/icon_booking_success.svg" alt="icon" />
    </div>
    <h2 class="mt-[40px] text-[50px]">預約成功</h2>
    <p class="mt-[40px]">
      請留意簡訊發送訂房通知，入住當日務必出示此訂房通知，<br />若未收到簡訊請來電確認，謝謝您
    </p>
  </div>
  <div v-if="fail"
    class="relative flex h-[600ppx] w-full flex-col items-center justify-center border border-primary bg-primary text-center font-tc text-white">
    <button type="button" @click="closeModal" class="absolute right-[39px] top-[39px] cursor-pointer">
      <img src="../assets/images/icons8-cancel-white.png" alt="icon" />
    </button>
    <div class="flex">
      <img src="../assets/images/amenities/icon_booking_success.svg" alt="icon" />
    </div>
    <h2 class="mt-[40px] text-[50px]">預約失敗</h2>
    <p class="mt-[40px]">哎呀！晚了一步！您預約的日期已經被預約走了， <br />再看看其它房型吧</p>
  </div>
</template>

<script setup>
import { ref, watchEffect, computed } from 'vue'
import { useDateStore } from '../stores/date'
import { storeToRefs } from 'pinia'

const props = defineProps({
  room: {
    type: Object,
    default: () => { },
    required: true
  }
})

const emit = defineEmits(['getCloseModal'])
const form = ref(true)
const success = ref(false)
const fail = ref(false)
const closeModal = () => {
  emit('getCloseModal')
}

// 送出預定回傳結果
const resultBack = () => {
  //如果成功或是失敗
  let a = 1
  let b = 2
  if (a !== b) {
    form.value = !form.value
    success.value = !success.value
  } else {
    form.value = !form.value
    fail.value = !success.value
  }
}

// 手機驗證
const isPhone = (value) => {
  if (!value) {
    return '手機為必填'
  }
  const phoneNumber = /^(09)[0-9]{8}$/
  return phoneNumber.test(value) ? true : '請輸入09開頭的10位數手機號碼'
}

const dateStore = useDateStore()
const { bookingDate, dateRange } = storeToRefs(dateStore)
const { minDate, maxDate, updateRange } = dateStore

const stayPeriod = ref({
  start: '',
  end: ''
})
if (dateRange.value !== null) {
  stayPeriod.value.start = dateRange.value.start
  stayPeriod.value.end = dateRange.value.end
}

watchEffect(() => {
  updateRange(stayPeriod.value)
})

const attribute = ref({
  highlight: {
    start: {
      style: {
        backgroundColor: '#38470B'
      },
      contentStyle: {
        color: '#ffffff'
      }
    },
    base: {
      style: {
        backgroundColor: 'rgba(56, 71, 11, 0.2)'
      },
      contentStyle: {
        color: '#000'
      }
    },
    end: {
      style: {
        backgroundColor: '#949C7C'
      },
      contentStyle: {
        color: '#ffffff'
      }
    }
  }
})
const amenitiesArr = Object.values(props.room.amenities)
const usableAmenitiesArr = amenitiesArr.filter((value) => value === true)

const showWeekdays = computed(
  () =>
    bookingDate.value.totalDays > 0 &&
    bookingDate.value.weekends === 0 &&
    bookingDate.value.totalNights !== 0
)
const showWeekends = computed(
  () => bookingDate.value.totalDays > 0 && bookingDate.value.weekends > 0
)
const showError = computed(() => bookingDate.value.totalNights <= 0)
</script>
