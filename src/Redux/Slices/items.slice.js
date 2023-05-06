import { createSlice } from "@reduxjs/toolkit";
const initaial = []
export const itemsSlice = createSlice({
    name: "Items",
    initialState: initaial,
    reducers: {
        addItem: (state) => {
            return state
        }
    }
})
export const { addItem } = itemsSlice.actions
export default itemsSlice.reducer