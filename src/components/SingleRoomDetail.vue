// 單一房型資訊
<template>
  <div class="detail text-primary">
    <!-- {{ props.room.descriptionShort }} -->
    <div class="mb-[47px] flex flex-row-reverse">
      <ul class="flex text-xs font-bold">
        <li>{{ props.room.descriptionShort.GuestMax }}人・</li>

        <li>{{ props.room.descriptionShort.GuestMax == 1 ? '單人床' : '雙人床' }}・</li>

        <li>{{ props.room.amenities.Breakfast == true ? '附早餐' : '不附早餐' }}・</li>
        <li>衛浴{{ props.room.descriptionShort['Private-Bath'] }}間・</li>
        <li>{{ props.room.descriptionShort.Footage }}平方公尺</li>
      </ul>
    </div>
    <ul class="mb-[35px] text-xs">
      <li>
        平日（一～四）價格：{{ props.room.normalDayPrice }}/ 假日（五〜日）價格：{{
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
        ・{{ props.room.descriptionShort.GuestMax == 1 ? '單人間' : '多人間' }}僅供{{
          props.room.descriptionShort.GuestMax
        }}位客人使用。
      </li>
      <li>
        ・臥室配有{{ props.room.descriptionShort.GuestMax == 1 ? '單人床' : '雙人床' }}和{{
          props.room.descriptionShort['Private-Bath'] == true ? '私人浴室' : ''
        }}。
      </li>
      <li>・您需要的一切為您準備：床單和毯子，毛巾，肥皂和洗髮水，吹風機</li>
      <li>・房間裡有AC，當然還有WiFi。</li>
    </ul>
    <ul class="grid grid-cols-6 flex-wrap">
      <li class="relative mb-[25px]">
        <div
          :class="`absolute z-10 h-[80px] w-full bg-white filter ${
            props.room.amenities.Breakfast ? 'opacity-0' : 'opacity-80'
          }`"
        ></div>
        <div class="flex flex-col items-center justify-center">
          <img src="../assets/images/amenities/icon_amenities_Breakfast.svg" alt="" class="mb-2" />
          <p class="text-xs">早餐</p>
        </div>
        <img
          :src="`
              ${
                props.room.amenities.Breakfast
                  ? './src/assets/images/amenities/icons-ok.svg'
                  : './src/assets/images/amenities/icons-cancel.svg'
              }
              
            `"
          alt=""
          srcset=""
          class="absolute right-5 top-0"
        />
      </li>
      <li class="relative mb-[25px]">
        <div
          :class="`absolute z-10 h-[80px] w-full bg-white ${
            props.room.amenities['Mini-Bar'] ? 'opacity-0' : 'opacity-80'
          } filter`"
        ></div>
        <div class="flex flex-col items-center justify-center">
          <img src="../assets/images/amenities/icon_amenities_Mini-Bar.svg" alt="" class="mb-2" />
          <p class="text-xs">Mini Bar</p>
        </div>
        <img
          :src="`
              ${
                props.room.amenities['Mini-Bar']
                  ? './src/assets/images/amenities/icons-ok.svg'
                  : './src/assets/images/amenities/icons-cancel.svg'
              }
              
            `"
          alt=""
          srcset=""
          class="absolute right-5 top-0"
        />
      </li>
      <li class="relative mb-[25px]">
        <div
          :class="`absolute z-10 h-[80px] w-full bg-white ${
            props.room.amenities['Room-Service'] ? 'opacity-0' : 'opacity-80'
          } filter`"
        ></div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="../assets/images/amenities/icon_amenities_Room-Service.svg"
            alt=""
            class="mb-2"
          />
          <p class="text-xs">Room Service</p>
        </div>
        <img
          :src="`
              ${
                props.room.amenities['Room-Service']
                  ? './src/assets/images/amenities/icons-ok.svg'
                  : './src/assets/images/amenities/icons-cancel.svg'
              }
              
            `"
          alt=""
          srcset=""
          class="absolute right-5 top-0"
        />
      </li>
      <li class="relative mb-[25px]">
        <div
          :class="`absolute z-10 h-[80px] w-full bg-white ${
            props.room.amenities['Wi-Fi'] ? 'opacity-0' : 'opacity-80'
          } filter`"
        ></div>
        <div class="flex flex-col items-center justify-center">
          <img src="../assets/images/amenities/icon_amenities_Wi-Fi.svg" alt="" class="mb-2" />
          <p class="text-xs">Wifi</p>
        </div>
        <img
          :src="`
              ${
                props.room.amenities['Wi-Fi']
                  ? './src/assets/images/amenities/icons-ok.svg'
                  : './src/assets/images/amenities/icons-cancel.svg'
              }
              
            `"
          alt=""
          srcset=""
          class="absolute right-5 top-0"
        />
      </li>
      <li class="relative mb-[25px]">
        <div
          :class="`absolute z-10 h-[80px] w-full bg-white ${
            props.room.amenities['Child-Friendly'] ? 'opacity-0' : 'opacity-80'
          } filter`"
        ></div>

        <div class="flex flex-col items-center justify-center">
          <img
            src="../assets/images/amenities/icon_amenities_Child-Friendly.svg"
            alt=""
            class="mb-2"
          />
          <p class="text-xs">適合兒童</p>
        </div>

        <img
          :src="`
              ${
                props.room.amenities['Child-Friendly']
                  ? './src/assets/images/amenities/icons-ok.svg'
                  : './src/assets/images/amenities/icons-cancel.svg'
              }
              
            `"
          alt=""
          srcset=""
          class="absolute right-5 top-0"
        />
      </li>
      <li class="relative mb-[25px]">
        <div
          :class="`absolute z-10 h-[80px] w-full bg-white ${
            props.room.amenities.Television ? 'opacity-0' : 'opacity-80'
          } filter`"
        ></div>

        <div class="flex flex-col items-center justify-center">
          <img src="../assets/images/amenities/icon_amenities_Television.svg" alt="" class="mb-2" />
          <p class="text-xs">電話</p>
        </div>

        <img
          :src="`
              ${
                props.room.amenities.Television
                  ? './src/assets/images/amenities/icons-ok.svg'
                  : './src/assets/images/amenities/icons-cancel.svg'
              }
              
            `"
          alt=""
          srcset=""
          class="absolute right-5 top-0"
        />
      </li>
      <li class="relative mb-[25px]">
        <div
          :class="`absolute z-10 h-[80px] w-full bg-white ${
            props.room.amenities['Great-View'] ? 'opacity-0' : 'opacity-80'
          } filter`"
        ></div>

        <div class="flex flex-col items-center justify-center">
          <img src="../assets/images/amenities/icon_amenities_Great-View.svg" alt="" class="mb-2" />
          <p class="text-xs">漂亮的視野</p>
        </div>

        <img
          :src="`
              ${
                props.room.amenities['Great-View']
                  ? './src/assets/images/amenities/icons-ok.svg'
                  : './src/assets/images/amenities/icons-cancel.svg'
              }
              
            `"
          alt=""
          srcset=""
          class="absolute right-5 top-0"
        />
      </li>
      <li class="relative mb-[25px]">
        <div
          :class="`absolute z-10 h-[80px] w-full bg-white ${
            props.room.amenities.Refrigerator ? 'opacity-0' : 'opacity-80'
          } filter`"
        ></div>

        <div class="flex flex-col items-center justify-center">
          <img
            src="../assets/images/amenities/icon_amenities_Refrigerator.svg"
            alt=""
            class="mb-2"
          />
          <p class="text-xs">冰箱</p>
        </div>

        <img
          :src="`
              ${
                props.room.amenities.Refrigerator
                  ? './src/assets/images/amenities/icons-ok.svg'
                  : './src/assets/images/amenities/icons-cancel.svg'
              }
              
            `"
          alt=""
          srcset=""
          class="absolute right-5 top-0"
        />
      </li>
      <li class="relative mb-[25px]">
        <div
          :class="`absolute z-10 h-[80px] w-full bg-white ${
            props.room.amenities.Sofa ? 'opacity-0' : 'opacity-80'
          } filter`"
        ></div>

        <div class="flex flex-col items-center justify-center">
          <img src="../assets/images/amenities/icon_amenities_Sofa.svg" alt="" class="mb-2" />
          <p class="text-xs">沙發</p>
        </div>

        <img
          :src="`
              ${
                props.room.amenities.Sofa
                  ? './src/assets/images/amenities/icons-ok.svg'
                  : './src/assets/images/amenities/icons-cancel.svg'
              }
              
            `"
          alt=""
          srcset=""
          class="absolute right-5 top-0"
        />
      </li>
      <li class="relative mb-[25px]">
        <div
          :class="`absolute z-10 h-[80px] w-full bg-white ${
            props.room.amenities['Pet-Friendly'] ? 'opacity-0' : 'opacity-80'
          } filter`"
        ></div>

        <div class="flex flex-col items-center justify-center">
          <img
            src="../assets/images/amenities/icon_amenities_Pet-Friendly.svg"
            alt=""
            class="mb-2"
          />
          <p class="text-xs">攜帶寵物</p>
        </div>

        <img
          :src="`
              ${
                props.room.amenities['Pet-Friendly']
                  ? './src/assets/images/amenities/icons-ok.svg'
                  : './src/assets/images/amenities/icons-cancel.svg'
              }
              
            `"
          alt=""
          srcset=""
          class="absolute right-5 top-0"
        />
      </li>
      <li class="relative mb-[25px]">
        <div
          :class="`absolute z-10 h-[80px] w-full bg-white ${
            props.room.amenities['Smoke-Free'] ? 'opacity-0' : 'opacity-80'
          } filter`"
        ></div>

        <div class="flex flex-col items-center justify-center">
          <img src="../assets/images/amenities/icon_amenities_Smoke-Free.svg" alt="" class="mb-2" />
          <p class="text-xs">全面禁菸</p>
        </div>

        <img
          :src="`
              ${
                props.room.amenities['Smoke-Free']
                  ? './src/assets/images/amenities/icons-ok.svg'
                  : './src/assets/images/amenities/icons-cancel.svg'
              }
              
            `"
          alt=""
          srcset=""
          class="absolute right-5 top-0"
        />
      </li>
      <li class="relative mb-[25px]">
        <div
          :class="`absolute z-10 h-[80px] w-full bg-white ${
            props.room.amenities['Air-Conditioner'] ? 'opacity-0' : 'opacity-80'
          } filter`"
        ></div>

        <div class="flex flex-col items-center justify-center">
          <img
            src="../assets/images/amenities/icon_amenities_Air-Conditioner.svg"
            alt=""
            class="mb-2"
          />
          <p class="text-xs">空調</p>
        </div>

        <img
          :src="`
              ${
                props.room.amenities['Air-Conditioner']
                  ? './src/assets/images/amenities/icons-ok.svg'
                  : './src/assets/images/amenities/icons-cancel.svg'
              }
              
            `"
          alt=""
          srcset=""
          class="absolute right-5 top-0"
        />
      </li>
    </ul>
  </div>
</template>
<script setup>
// import { computed } from 'vue'
const props = defineProps({
  room: {
    // type: Object,
    required: true
  }
})
// const roomDetail = computed(() => {
//   return room
// })
// console.log(roomDetail)
</script>
