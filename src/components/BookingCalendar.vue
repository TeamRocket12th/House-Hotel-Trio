<template>
  <VDatePicker
    locale="en"
    :columns="columns"
    :min-date="new Date(new Date().getTime() + 24 * 60 * 60 * 1000)"
    :max-date="maxDate()"
    :select-attribute="attribute"
    :drag-attribute="attribute"
    :masks="{ weekdays: 'WW' }"
    :disabled-dates="disabledDates"
    v-model.range="selectRange"
    is-expanded
    class="w-full"
  />
  <button type="button" @click="resetCalendar" class="mt-2 block text-sm text-secondary">
    重新選取
  </button>
</template>
<script setup>
import { ref } from 'vue'
import { useScreens } from 'vue-screen-utils'
import { useDateStore } from '../stores/date'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const props = defineProps({
  bookingDate: {
    type: Array,
    default: () => [],
    required: true
  }
})

// calendar style
const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1366px' })
const columns = mapCurrent({ lg: 2, md: 1 }, 1)
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

// default selected date
const dateStore = useDateStore()
const { dateRange } = storeToRefs(dateStore)
const { updateRange } = dateStore

const selectRange = ref(null)
selectRange.value = dateRange.value

watch(selectRange, (newRange) => {
  updateRange(newRange)
})

const maxDate = () => {
  const today = new Date()
  today.setDate(today.getDate() + 90)
  const y = today.getFullYear()
  const m = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1
  const d = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
  return `${y}-${m}-${d}`
}

const disabledDates = ref([])
const updateBookingDate = (newDates) => {
  newDates.forEach((booking) => {
    disabledDates.value.push(booking.date)
  })
}

watch(
  () => props.bookingDate,
  (newDates) => {
    updateBookingDate(newDates)
  }
)

const resetCalendar = () => {
  selectRange.value = null
}
</script>

<style>
.vc-pane-container {
  border: 1px solid #38470b;
}

.vc-day-content.vc-disabled {
  text-decoration: line-through;
}

.vc-header.is-lg {
  color: #38470b;
  font-size: 12px;
  margin-bottom: 20px;
  font-weight: bold;
}
.vc-weekdays {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(56, 71, 11, 0.1);
  margin-bottom: 14px;
}
.vc-weekday {
  color: rgba(56, 71, 11, 0.5);
}
.vc-day-content {
  color: #38470b;
}
.vc-disabled {
  color: rgba(56, 71, 11, 0.3);
}
</style>
