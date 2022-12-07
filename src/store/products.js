import { createSlice } from "@reduxjs/toolkit";

let productId = 0;

const slice = createSlice ({
    name: "products",
    initialState: [],
    reducers: {
        productAdded: (products, action) => {
            products.push({
                id: ++productId,
                name: action.payload.name,
            })
        }
    }
})

export const { productAdded } = slice.actions;
export default slice.reducer;