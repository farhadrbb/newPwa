import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { authApi } from '../api/auth'

interface ToolsState {
    key: string,
    user:any

}

const initialState = {
    key: '',
} as ToolsState

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setKeyExchnage: (state, action) => {
            state.key = action.payload
        },

    },
    extraReducers: (builder) => {
        builder.addMatcher(
            authApi.endpoints.authPost.matchFulfilled,
            (state, { payload }) => {
                state.user = payload.result
            }
        )
    },
})

export const { setKeyExchnage } = user.actions
export default user.reducer