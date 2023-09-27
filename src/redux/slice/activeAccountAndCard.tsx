import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'




const initialState = {
    cards:[],
    accounts:[],
    activeCard:{},
    activeAccount:{}
}


const activeCardOrAccount = createSlice({
    name: 'activeCardOrAccount',
    initialState,
    reducers: {
        setCardActive: (state, action) => {
            state.activeCard = action.payload
        },
        setAccountActive: (state, action) => {
            state.activeAccount = action.payload
        },
        setCards: (state, action) => {
            state.cards = action.payload
        },
        setAccounts: (state, action) => {
            state.accounts = action.payload
        },
       
    },
})

export const { setCardActive,setAccountActive,setCards,setAccounts} = activeCardOrAccount.actions
export default activeCardOrAccount.reducer