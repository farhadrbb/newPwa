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
        setBalanceAccount: (state, action) => {
            let balanced = state.user?.accounts?.filter((itm:any,ind:any)=>{
                if(itm.accountNumber === action.payload.accountNumber){
                    state.user.accounts[ind] = action.payload
                }

            })
            // state.user = action.payload
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

export const { setKeyExchnage,setBalanceAccount } = user.actions
export default user.reducer