import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'

export const searchFocus = () => ({
    type:constants.SEARCH_FOUCS
});
export const searchBlur = () => ({
    type:constants.SEARCH_BLUR
});
const changList =(data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data)//让他转变为immutable类型，不然他会以普通数据类型替换store里的数据类型
})
export const getList = () =>{
    return (dispatch) =>{
        axios.get('/api/headerList.json').then(res=>{
            const data = res.data
            dispatch(changList(data.data))
        }).catch(error=>{
            console.log('error')
        })
    }
}