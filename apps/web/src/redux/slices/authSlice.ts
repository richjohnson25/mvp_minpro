import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    auth: null
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (initialState, action) => {
            initialState.auth = action.payload
        },
        setAuthLogout: (initialState) => {
            initialState.auth = null
        }
    }
})

export const {setAuth, setAuthLogout} = authSlice.actions;

export default authSlice.reducer