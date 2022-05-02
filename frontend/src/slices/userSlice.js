import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name : "user",
    initialState: {
        username: null,
        jwt: null,
    },
    reducers: {
        setUserSlice : (state, action) => {
            const { user_name, accessToken } = action.payload
            return {
                ...state,
                username: user_name,
                jwt: accessToken,
            }
        },
    }
})

export const { setUserSlice } = userSlice.actions;
export default userSlice.reducer