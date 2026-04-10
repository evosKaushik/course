import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slice/counterSlice.js'

const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})

export default store