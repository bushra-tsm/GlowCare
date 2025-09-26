import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const cartSlice = createSlice({
    name: "cart",
    initialState: JSON.parse(localStorage.getItem("GlowCare-cart")),
    reducers: {
        addToCart: (state, action) => {
            if (state) {
                const exists = state.find(cartItem => cartItem._id === action.payload._id)
                if (!exists) {
                    localStorage.setItem("GlowCare-cart", JSON.stringify([...state, action.payload]))
                    toast("Added to the Cart!")
                    return [...state, action.payload]
                }
                toast("Already added to the Cart!")
            } else {
                localStorage.setItem("GlowCare-cart", JSON.stringify([action.payload]))
                return [action.payload]
            }
        },
        removeFromCart: (state, action) => {
            const target = action.payload
            const newState = state.filter(cartItem => cartItem._id != target._id)
            localStorage.setItem("GlowCare-cart", JSON.stringify(newState))
            return [...newState]
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer;