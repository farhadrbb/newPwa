import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ToolsState {
    loading: boolean,
    dark: 'light' | 'dark',
    notify: NotifyObj

}


interface NotifyObj {
    title: string,
    type: 'error' | 'success' | null,
    btn?: string,
    fn?:Function | null
}

const initialState: ToolsState = {
    loading: false,
    dark: localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
    notify: {
         title: '', 
         type: null,
         btn:'',
         fn:null
    }
}

const toolsSlice = createSlice({
    name: 'tools',
    initialState,
    reducers: {
        setLoadingSlice: (state, action) => {
            state.loading = action.payload
            // setTimeout(() => {
            //     state.loading =  false
            // }, 2000);
        },
        setDarkModeSlice: (state, action) => {
            state.dark = action.payload

        },
        setNotifySlice: (state, action:PayloadAction<NotifyObj>) => {
            state.notify =action.payload
        },
    },
})

export const { setLoadingSlice, setDarkModeSlice, setNotifySlice } = toolsSlice.actions
export default toolsSlice.reducer