// import { useDispatch, useSelector } from "react-redux";
// import { storeData } from "./AsyncStorage";
// import { useGetProfileQuery } from "../features/profileApi";

// function RefectchProfile(token) {

//     console.log("REFETCH");
//     const dispatch = useDispatch();
    
//     const getProfileFn = useGetProfileQuery(token)
//     console.log('>>>>>>>>>>', getProfileFn);  

//     storeData('user', getProfileFn.data.data[0], true);
//     dispatch(setUser(getProfileFn.data.data[0]))
// }

// export default RefectchProfile