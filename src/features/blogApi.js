import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NODE_ENV === "production" ? 'https://appropriate-world-backend.onrender.com' : 'http://localhost:5000', }),
    endpoints: (builder) => ({

        getBlogs: builder.query({
            query: () => {
                return '/api/blog/all'
            }
        }),

        getSigleBlogs: builder.query({
            query: (url = '') => {
                console.log(url);
                return `/api/blog/${url}`
            }
        }),

        getContact: builder.query({
            query: () => {
                return {
                    url: `/api/profile/contact`,
                    method: "GET",
                    'credentials': 'include',
                    'mode': 'cors',
                    'headers': {
                        'accept': 'application/json, text/plain, */*', 'content-type': 'application/json'
                    }
                }
            }
        }),

        createBlog: builder.mutation({
            query: (data) => {
                return {
                    url: '/api/blog',
                    method: "POST",
                    body: data,
                    'credentials': 'include',
                    'mode': 'cors',
                    'headers': {
                        'accept': 'application/json, text/plain, */*', 'content-type': 'application/json'
                    }
                }
            }
        })

    })
})


export const { useGetContactQuery, useGetBlogsQuery, useGetSigleBlogsQuery, useCreateBlogMutation } = blogApi
export default blogApi;