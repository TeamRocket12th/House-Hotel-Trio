import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', () => {
  const todayDate = ref(new Date())

  const today = todayDate.value
  const defaultStartDate = new Date(today)
  defaultStartDate.setDate(today.getDate() + 1)

  const defaultEndDate = new Date(today)
  defaultEndDate.setDate(today.getDate() + 2)

  const format = (date) => `${date.getFullYear()}, ${date.getMonth() + 1}, ${date.getDate()}`

  const dateRange = ref({
    start: new Date(format(defaultStartDate)),
    end: new Date(format(defaultEndDate))
  })

  const updateRange = (newRange) => {
    dateRange.value = newRange
  }

  const normalDayPrice = ref('')
  const holidayPrice = ref('')

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

  return { todayDate, dateRange, updateRange, normalDayPrice, holidayPrice, bookingDate }
})
