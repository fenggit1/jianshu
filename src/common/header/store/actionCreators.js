import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'

const changList =(data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),//让他转变为immutable类型，不然他会以普通数据类型替换store里的数据类型
    totalPage:Math.ceil(data.length/10)
});
export const searchFocus = () => ({
    type:constants.SEARCH_FOUCS
});
export const searchBlur = () => ({
    type:constants.SEARCH_BLUR
});
export const mouseEnter = ()=>({
    type:constants.MOUSE_ENTER
});
export const mouseLeave = ()=>({
    type:constants.MOUSE_LEAVE
});
export const changepage =(page)=>({
    type:constants.CHANGE_PAGE,
    page
});
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