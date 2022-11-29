import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slice/todoSlice'
import authSlice from './slice/authSlice'

export default configureStore({
  reducer: {
    todos:todoReducer,
    auth:authSlice
  },
})