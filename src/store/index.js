import { configureStore } from '@reduxjs/toolkit'
import trainerSlice from './slices/trainer.slice'
import checkedSlice from './slices/check.slice' 

export default configureStore({
    reducer: {
        trainerSlice,
        checkedSlice
    }
})
