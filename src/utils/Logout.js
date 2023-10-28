import { useDispatch } from "react-redux"
import { setToken } from "../features/localSlice"
import { removeValue, storeData } from "./AsyncStorage"


const logout = ()=>{

    const dispatch = useDispatch()
    removeValue('token')
    dispatch(setToken(null))

}

export default logout