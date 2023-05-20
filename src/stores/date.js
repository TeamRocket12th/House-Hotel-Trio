import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', () => {
  //只能選取明天起90天內的日期
  const minDate = () => {
    return new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  }

  const maxDate = () => {
    const today = new Date()
    today.setDate(today.getDate() + 90)
    const y = today.getFullYear()
    const m = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1
    const d = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
    return `${y}-${m}-${d}`
  }

  // 預設行事曆顯示當天日期
  const todayDate = ref(new Date())
  const defaultDate = new Date(todayDate.value)
  defaultDate.setDate(defaultDate.getDate())

  const format = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${year}, ${month}, ${day}`
  }

  const dateRange = ref({
    start: new Date(format(defaultDate)),
    end: new Date(format(defaultDate))
  })

  // 選取行事曆更新日期範圍
  const updateRange = (newRange) => {
    dateRange.value = newRange
  }

  const normalDayPrice = ref('')
  const holidayPrice = ref('')

  // 計算住宿總價
  const calTotalPrice = () => {
    if (dateRange.value === null) {
      const bookingInfo = {
        totalPrice: 0,
        totalNights: 0,
        weekends: 0,
        weekdays: 0,
        totalDays: 0
      }
      return bookingInfo
    }
    const checkOutDate = new Date(dateRange.value.end)
    const checkInDate = new Date(dateRange.value.start)

    const totalNights = Math.ceil(
      (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
    )
    let weekdays = 0
    let weekends = 0
    for (let i = 0; i < totalNights; i++) {
      const currentDate = new Date(checkInDate.getTime() + i * (1000 * 60 * 60 * 24))
      if (currentDate.getDay() === 5 || currentDate.getDay() === 6) {
        weekends++
      } else {
        weekdays++
      }
    }

    const totalDays = totalNights + 1

    const totalPrice = (
      weekdays * normalDayPrice.value +
      weekends * holidayPrice.value
    ).toLocaleString('en-US')

    const bookingInfo = {
      totalPrice,
      totalNights,
      weekends,
      weekdays,
      totalDays
    }

    return bookingInfo
  }
  const bookingDate = computed(() => {
    return calTotalPrice()
  })

  return {
    todayDate,
    dateRange,
    updateRange,
    normalDayPrice,
    holidayPrice,
    bookingDate,
    minDate,
    maxDate
  }
})
