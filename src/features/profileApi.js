import AsyncStorage from "@react-native-async-storage/async-storage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";
import { getData } from "../utils/AsyncStorage";

const axiosOption = {
    origin: false,
    credentials: 'include',
    withCredentials: true,
    mode: "cors"
}
const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://appropriate-world-backend.onrender.com',
        // baseUrl: 'http://localhost:5000',
        'credentials': 'include',
        'mode': 'cors',
        'headers': {
            'accept': 'application/json, text/plain, */*', 'content-type': 'application/json'
        }
    }),
    
    endpoints: (builder) => ({
        
        // get  Profiles
        getProfile: builder.query({
            query: (token) => {
                return {
                    url: '/api/profile',
                    // 'credentials': 'include',
                    'mode': 'cors',
                    'headers': {
                        'token' : token,
                        'accept': 'application/json, text/plain, */*', 'content-type': 'application/json'
                    }
                }
            },
        }),

        // Create a profile
        createProfile: builder.mutation({
            query: (data) => ({
                url: '/api/profile',
                method: "POST",
                body: data,
                

            })
        }),

        // Update a profile
        updateProfile: builder.mutation({
            query: ({token, data}) => {
                console.log(name);
                return{url: '/api/profile',
                method: "PUT",
                body: data,
                'headers': {
                    'token' : token,
                    'accept': 'application/json, text/plain, */*', 'content-type': 'application/json'
                }
                }
            }
        }),

        // Get Signle Profile
        getSingleProfile: builder.query({
            query: ({ id }) => ({
                url: `api/profile/${id}`,
                method: "GET"
            })
        }),

        // Get All Profile
        getContact: builder.query({
            query: ({token}) => {
                return {
                    url: `/api/profile/contact`,
                    method: "GET",
                    'credentials': 'include',
                    'mode': 'cors',
                    'headers': {
                        'token' : token,
                        'accept': 'application/json, text/plain, */*', 'content-type': 'application/json'
                    }
                }
            }
        }),

        // Add Friend
        addFriend: builder.mutation({
            query: ({ token, id, friendId }) => {
                console.log(id, friendId);
                return {
                    url: `api/profile/add/${id}`,
                    method: 'POST',
                    body: { friendId },
                    'headers': {
                        'token' : token,
                        'accept': 'application/json, text/plain, */*', 'content-type': 'application/json'
                    }
                }
            }
        }),


        // Remove Friend
        removeFriend: builder.mutation({
            query: ({ id, friendId }) => {

                return {
                    url: `api/profile/remove/${id}`,
                    method: 'POST',
                    body: { friendId }
                }
            }
        })

    })
})

export const {useAddFriendMutation, useGetContactQuery,  useGetSingleProfileQuery, useCreateProfileMutation, useGetProfileQuery, useUpdateProfileMutation, useLazyGetProfileQuery, useRemoveFriendMutation } = profileApi
export default profileApi