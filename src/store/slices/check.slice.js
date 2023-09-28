import { createSlice } from '@reduxjs/toolkit';

export const checkedSlice = createSlice({
    name: 'checked',
    initialState: false,
    reducers: {
        setCheckedSlice: (state, action) => action.payload
    }
})

export const { setCheckedSlice } = checkedSlice.actions;

export default checkedSlice.reducer;