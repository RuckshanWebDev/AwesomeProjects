import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://appropriate-world-backend.onrender.com', 'credentials': 'include',
        // baseUrl:  'http://localhost:5000',
        'mode': 'cors',
        'headers': {
            'accept': 'application/json, text/plain, */*', 'content-type': 'application/json'
        }
    }),
    endpoints: (builder) => ({

        // Login User
        loginUser: builder.mutation({
            query: ({ email, password }) => ({
                url: '/api/user/auth/mobile',
                method: 'POST',
                body: { email, password },

            }),
            // invalidatesTags: ['profile'],

        }),

        // Register User
        registerUser: builder.mutation({
            query: ({ name, email, password }) => ({
                url: '/api/user/mobile',
                method: 'POST',
                body: { name, email, password }
            }),
        }),

        // Logout User
        logoutUser: builder.mutation({
            query: () => ({
                url: '/api/user/logout',
                method: 'POST'
            }),
        }),


         // Forgot Password
         forgotPassword: builder.mutation({
            query: ({ email }) => {
                return {
                    url: `/api/user/forgot-password`,
                    method: 'POST',
                    body: { email }
                }
            }
        }),

        resetPassword: builder.mutation({

            query: ({ token, password }) => {
                return {
                    url: `/api/user/reset-password/${token}`,
                    method: 'POST',
                    body: { newPassword: password }
                }
            }

        })

    })
})

export const { useLoginUserMutation, useRegisterUserMutation, useLogoutUserMutation } = userApi
export default userApi