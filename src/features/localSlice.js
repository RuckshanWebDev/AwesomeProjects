import { createSlice } from '@reduxjs/toolkit'
import { storeData } from '../utils/AsyncStorage'

const initialState = {
    popup: false,
    count : 0,
    user: null,
    // notifications: localStorage.getItem('notification') ? JSON.parse(localStorage.getItem('notification')) : [],
    // notificationCount: 0,
    // localContactId: '',
    token: null,
    auth : false,
    welcome : false
}


const localSlice = createSlice({
    name: "local",
    initialState,
    reducers: {
        authToggle : (state)=> {
            state.auth = !state.auth
        },
        setToken : (state, action)=>{
            state.token = action.payload
            state.auth = state.token ? true : false
        },
        setUser : (state, action)=>{
            console.log(action.payload, '😎😎😎');
            state.user = action.payload
            storeData('user', action.payload, true);
        },
        changeWelcome : (state, action)=>{
            state.welcome = true
        }
        // togglePopup: (state) => {
        //     state.popup = !state.popup
        // },
        // setUser: (state, action) => {
        //     state.user = action.payload;
        //     localStorage.setItem('user', JSON.stringify(action.payload))
        // },
        // setProfileId: (state, action) => {
        //     state.user.profileId = action.payload;
        //     localStorage.setItem('user', JSON.stringify(state.user))
        // },
        // clearUser: (state) => {
        //     state.user = null
        //     localStorage.removeItem('user')
        // },
        // addNotify: (state, action) => {
        //     state.notifications = action.payload[0].from
        //     state.notificationCount = state.notifications.length
        // },
        // readNotify: (state, action) => {

        // }
    }
})

// export const { setLocalContactId, togglePopup, setUser, clearUser, setProfileId, addNotify } = localSlice.actions
export const {  authToggle, setToken, setUser, changeWelcome} = localSlice.actions
export default localSlice.reducer