import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    popup: false,
    count : 0,
    // user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    // notifications: localStorage.getItem('notification') ? JSON.parse(localStorage.getItem('notification')) : [],
    // notificationCount: 0,
    // localContactId: '',
    token: null,
    auth : false,
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
export const {  authToggle, setToken} = localSlice.actions
export default localSlice.reducer