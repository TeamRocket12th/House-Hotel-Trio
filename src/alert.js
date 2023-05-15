import Swal from 'sweetalert2'

const errorAlert = (msg = '有某個地方出錯了！') => {
  Swal.fire('錯誤', msg, 'error')
}

export { errorAlert }
