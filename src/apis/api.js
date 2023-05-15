import request from './request'

// 取得所有房型資訊
const apiGetAllrooms = () => request.get('/rooms')

// 取得單一房型細節
const apiGetSingleRoom = (id) => request.get(`/room/${id}`)

// 預約房型
const apiReserveRoom = (id, order) => request.post(`/room/${id}`, order)

export { apiGetAllrooms, apiGetSingleRoom, apiReserveRoom }
