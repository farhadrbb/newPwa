import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface IStep {
    id: number,
    title: string
    backUrl1: string,
    backUrl2?: string,
    backToHome: string
    data: object,
    add: boolean,
    pathname: ''
}

// const initialState: any = {
//     steps: []
// }
const initialState = {
    // steps: [],
    data: {
        // step0: {
        //     id: '',
        //     pathname: '',
        //     title: '',
        //     backUrl1: '',
        //     backUrl2: '',
        //     backToHome: '',
        //     data: {},
        // },
        // step1: {
        //     id: '',
        //     pathname: '',
        //     title: '',
        //     backUrl1: '',
        //     backUrl2: '',
        //     backToHome: '',
        //     data: {},
        // },
        // step2: {
        //     id: '',
        //     pathname: '',
        //     title: '',
        //     backUrl1: '',
        //     backUrl2: '',
        //     backToHome: '',
        //     data: {},
        // },
        // step3: {
        //     id: '',
        //     pathname: '',
        //     title: '',
        //     backUrl1: '',
        //     backUrl2: '',
        //     backToHome: '',
        //     data: {},
        // },

    }
}


const stepSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
        setStepsSlice: (state, action) => {
            let obj = action.payload
            state.data = { ...state.data, ...obj }
        },
        setStepsSliceBack: (state, action) => {
            let obj:any = {
                ...state.data
            }
            let str = action.payload.replace("step","")
            let num = Number(str) + 1
            console.log("num",num)
            
            delete obj[`step${Number(str) + 1}`]
            // console.log("obj",obj);
            state.data = obj
        },
        setStepsSliceEmpty: (state, action) => {
            state.data = {}
        },
    },
})

export const { setStepsSlice, setStepsSliceBack,setStepsSliceEmpty } = stepSlice.actions
export default stepSlice.reducer