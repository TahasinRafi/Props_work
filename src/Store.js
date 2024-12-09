import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './slicd/counterSlice'

export default configureStore({
  reducer: {
    conter : counterSlice,
  },
})