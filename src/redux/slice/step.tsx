import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface IStep {
    title: string
    backUrl1:string,
    backUrl2?: string,
    backToHome: string
    data: IData,
    pathname: string
}


interface IData{
    formValue?:any
    resultApi?:any
    dataReceipt?:any
    type?:string
    apiKey?:string
    activeTab?:number
}

interface IState{
    step0?:IStep
    step1?:IStep
    step2?:IStep
    step3?:IStep
    step4?:IStep
    step5?:IStep
}


const initialState = {
    data: {},
    backClick:false
}


const stepSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
        setStepsSlice: (state, action:PayloadAction<IState>) => {
            let obj = action.payload
            state.data = { ...state.data, ...obj }
        },
        // setStepsSliceBack: (state, action) => {
        //     let obj:any = {
        //         ...state.data
        //     }
        //     let str = action.payload.replace("step","")
        //     delete obj[`step${Number(str) + 1}`]
        //     // console.log("obj",obj);
        //     state.data = obj
        // },
        setStepsSliceEmpty: (state, action) => {
            state.data = {}
        },
        setStepsSliceEmptyTheStep: (state, action) => {
            let obj:any={
                ...state.data
            }
            delete obj[action.payload]
            state.data = obj
        },
        setBackClick: (state,action) => {
            state.backClick = action.payload
        },
        
    },
})

export const { setStepsSlice,setStepsSliceEmpty,setBackClick,setStepsSliceEmptyTheStep } = stepSlice.actions
export default stepSlice.reducer