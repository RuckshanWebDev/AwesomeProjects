import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";

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
        })

    })
})

export const { useGetSingleProfileQuery, useCreateProfileMutation, useGetProfileQuery, useUpdateProfileMutation, useLazyGetProfileQuery } = profileApi
export default profileApi