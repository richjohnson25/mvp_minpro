import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    transactions: []
}

export const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {}
})