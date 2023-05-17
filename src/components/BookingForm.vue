// 預定資料表格
<template>
    <div class="flex w-full justify-between font-tc items-stretch bg-white border border-primary " v-if="form">
        <div class="w-[445px] bg-primary   ">
            <div class="px-[65px] pt-[50px] pb-[26px] ">
                <form action="" class="">
                    <label>
                        <div for="name" class="text-[14px] text-white">
                            <span>姓名</span>

                            <span class="text-red-400 hidden">此欄位為必填</span>
                        </div>
                        <input type="text" id="name" class="w-[315px] h-[38px] p-2 mt-[7px] outline-none"
                            placeholder="請填寫預定人姓名">
                    </label>
                    <label>
                        <div for="name" class="text-[14px] text-white mt-4">
                            <span>手機號碼</span>
                            <span class="text-red-400 hidden">此欄位為必填</span>
                        </div>
                        <input type="text" id="name" class="w-[315px] h-[38px] p-2 mt-[7px] outline-none"
                            placeholder="請填寫預定人手機號碼">
                    </label>
                    <label>
                        <div for="name" class="text-[14px] text-white mt-4">
                            <span>入住日期</span>
                            <span class="text-red-400 hidden">此欄位為必填</span>
                        </div>
                        <input type="date" id="name" class="w-[315px] h-[38px] p-2 mt-[7px] outline-none font-normal"
                            placeholder="請填寫入住日期">
                    </label>
                    <label>
                        <div for="name" class="text-[14px] text-white mt-4">
                            <span>退房日期</span>
                            <span class="text-red-400 hidden">此欄位為必填</span>
                        </div>
                        <input type="date" id="name" class="w-[315px] h-[38px] p-2 mt-[7px] outline-none font-normal"
                            placeholder="請填寫退房日期">
                    </label>
                    <div class="border-b border-[#949C7C] w-full pb-[14px] text-[#949C7C] mt-4">2天，1晚平日</div>
                    <div class="text-white text-right  mt-4">
                        <p class="text-sm">總計</p>
                        <p class="text-[26px] openSans font-semibold">$1,380</p>
                    </div>
                    <button type="submit"
                        class="w-full text-white text-[18px] mt-4 font-bold border border-white py-2 hover:bg-white hover:text-primary hover:duration-totalDay00"
                        @click="resultBack">確認送出</button>
                    <p class="text-white text-xs mt-[18px] text-center">此預約系統僅預約功能，並不會對您進行收費</p>
                </form>
            </div>
        </div>

        <div class="px-[30px] mt-[50px]  w-full relative pr-[100px] text-primary">
            <img src="../assets/images/icons8-cancel.png" @click="closeModal" alt=""
                class="cursor-pointer absolute  right-[38px]">
            <div class="flex items-center mt-2 ">
                <h2 class="text-2xl inline-block whitespace-nowrap font-black">{{ props.room.name }}</h2>
                <div class="h-[1px] border-b  w-[80%] ml-2 "></div>
            </div>
            <p class="mt-2 text-sm leading-[1.7]">
                {{ props.room.descriptionShort.GuestMax }}人・
                {{ props.room.descriptionShort.Bed[0] === "Single" ? '單人床' : '雙人床' }}・
                {{ props.room.amenities.Breakfast ? '附早餐・' : '不附早餐・' }}
                衛浴{{ props.room.descriptionShort['Private-Bath'] }}間・
                {{ props.room.descriptionShort.Footage }}平方公尺<br>
                平日（一～四）價格：{{ props.room.normalDayPrice }} /
                假日（五〜日）價格：{{ props.room.holidayPrice }}
            </p>
            <ul class="my-[26px] flex gap-x-[30px]">
                <li class="flex flex-col text-[10px] text-primary items-center">
                    <img src="../assets/images/amenities/icon_amenities_Air-Conditioner.svg" alt=""
                        class="w-[30px] h-[30px]">
                    <p class=" mt-2 text-[#949C7C]">空調</p>
                </li>
                <li class="flex flex-col text-[10px] text-primary items-center">
                    <img src="../assets/images/amenities/icon_amenities_Breakfast.svg" alt="" class="w-[30px] h-[30px]">
                    <p class=" mt-2 text-[#949C7C]">早餐</p>
                </li>
                <li class="flex flex-col text-[10px] text-primary items-center">
                    <img src="../assets/images/amenities/icon_amenities_Mini-Bar.svg" alt="" class="w-[30px] h-[30px]">
                    <p class=" mt-2 text-[#949C7C]">Mini Bar</p>
                </li>
                <li class="flex flex-col text-[10px] text-primary items-center">
                    <img src="../assets/images/amenities/icon_amenities_Pet-Friendly.svg" alt="" class="w-[30px] h-[30px]">
                    <p class=" mt-2 text-[#949C7C]">攜帶寵物
                    </p>
                </li>
                <li class="flex flex-col text-[10px] text-primary items-center">
                    <img src="../assets/images/amenities/icon_amenities_Refrigerator.svg" alt="" class="w-[30px] h-[30px] ">
                    <p class=" mt-2 text-[#949C7C]">冰箱</p>
                </li>
                <li class="flex flex-col text-[10px] text-primary items-center">
                    <img src="../assets/images/amenities/icon_amenities_Sofa.svg" alt="" class="w-[30px] h-[30px]">
                    <p class=" mt-2 text-[#949C7C]">沙發</p>
                </li>
                <li class="flex flex-col text-[10px] text-primary items-center">
                    <img src="../assets/images/amenities/icon_amenities_Wi-Fi.svg" alt="" class="w-[30px] h-[30px]">
                    <p class=" mt-2 text-[#949C7C]">WIFI</p>
                </li>
            </ul>
            <div class="flex items-center mt-2 ">
                <h3 class="text-[16px] inline-block whitespace-nowrap font-black">訂房資訊</h3>
                <div class="h-[1px] border-b  w-[100%] ml-2 "></div>
            </div>
            <ul class="text-[10px] my-[12px]">
                <li class="py-[2px]">・入住時間：最早{{ props.room.checkInAndOut.checkInEarly }}，最晚{{
                    props.room.checkInAndOut.checkInLate }}；退房時間：{{ props.room.checkInAndOut.checkOut }}，請自行確認行程安排。</li>
                <li class="mt-[6px] py-[2px]">・平日定義週一至週四；假日定義週五至週日及國定假日。</li>
                <li class="mt-[6px] py-[2px]">・好室旅店{{ props.room.amenities['Smoke-Free'] === true ? '全面禁止吸菸。' : '房間內可吸菸。' }}
                </li>
                <li class="mt-[6px] py-[2px]">・若您有任何問題，歡迎撥打 03-8321155 ( 服務時間 週一至週六 10:00 - 18:00 )。</li>
            </ul>
            <div class="flex items-center mt-2 ">
                <h3 class="text-[16px] inline-block whitespace-nowrap font-black">預約流程</h3>
                <div class="h-[1px] border-b  w-[100%] ml-2 "></div>
            </div>
            <ul class="flex justify-between my-[19px] items-start">
                <li class=" border border-[#949C7C] text-center rounded-b-lg">
                    <div class="h-[50px] w-[160px] bg-[#949C7C] flex justify-center items-center"><img
                            src="../assets/images/amenities/reservationflow_step_1.svg" alt="">
                    </div>
                    <div class="w-[160px] h-[64px] text-[10px] my-[12px] px-2">送出線上預約單</div>
                </li>
                <img src="../assets/images/amenities/icon_datepicker_arrow_right.svg" alt="" class="mt-5">
                <li class=" border border-[#949C7C] text-center rounded-b-lg">
                    <div class="h-[50px] w-[160px] bg-[#949C7C] flex justify-center items-center"><img
                            src="../assets/images/amenities/reservationflow_step_2.svg" alt="">
                    </div>
                    <div class="w-[160px] h-[64px] text-[10px] my-[12px] px-2">系統立即回覆是否預訂成功
                        並以簡訊發送訂房通知
                        <br>(若未收到簡訊請來電確認)
                    </div>
                </li>
                <img src="../assets/images/amenities/icon_datepicker_arrow_right.svg" alt="" class="mt-5">
                <li class=" border border-[#949C7C] text-center rounded-b-lg">
                    <div class="h-[50px] w-[160px] bg-[#949C7C] flex justify-center items-center"><img
                            src="../assets/images/amenities/reservationflow_step_3.svg" alt="">
                    </div>
                    <div class="w-[160px] h-[64px] text-[10px] my-[12px] px-2">入住當日憑訂房通知
                        以現金或刷卡付款即可
                        <br>(僅接受VISA.JCB.銀聯卡)
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div v-if="success"
        class="flex flex-col w-full justify-center font-tc items-center text-center  border border-primary h-[600ppx] bg-primary text-white">
        <div class="flex"><img src="../assets/images/amenities/icon_booking_success.svg" alt=""></div>
        <h2 class="text-[50px] mt-[40px]">預約成功</h2>
        <p class="mt-[40px]">請留意簡訊發送訂房通知，入住當日務必出示此訂房通知，<br>若未收到簡訊請來電確認，謝謝您</p>
    </div>
    <div v-if="fail"
        class="flex flex-col w-full justify-center font-tc items-center text-center  border border-primary h-[600ppx] bg-primary text-white">
        <div class="flex"><img src="../assets/images/amenities/icon_booking_success.svg" alt=""></div>
        <h2 class="text-[50px] mt-[40px]">預約失敗</h2>
        <p class="mt-[40px]">哎呀！晚了一步！您預約的日期已經被預約走了， <br>再看看其它房型吧</p>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['getCloseModal']);
const form = ref(true)
const success = ref(false)
const fail = ref(false)
const closeModal = () => {
    emit("getCloseModal")
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

const props = defineProps({
    room: {
        required: true,
    }
})

console.log(props.room)
</script>

<style></style>