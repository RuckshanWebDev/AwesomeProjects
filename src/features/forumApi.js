import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const forumApi = createApi({
    reducerPath: 'forumApi',
    baseQuery: fetchBaseQuery({  baseUrl: 'https://appropriate-world-backend.onrender.com' }),
    endpoints: (builder) => ({

        // All Tweets
        getAllTweets: builder.query({
            query: () => {
                return '/api/forum/all'
            }
        }),

        // Create Tweet
        createTweet: builder.mutation({
            query: ({token, data}) => {
                return {
                    url: '/api/forum',
                    method: "POST",
                    body: data,
                    'credentials': 'include',
                    'mode': 'cors',
                    'headers': {
                        'token' : token,
                        'accept': 'application/json, text/plain, */*', 'content-type': 'application/json'
                    }
                }
            }
        }),

        // Like TWEET
        likeTweet: builder.mutation({
            query: ({ token, id, liked }) => {
                console.log(liked);
                return {
                    url: `/api/forum/like/${id}/${liked}`,
                    method: "POST",
                    'credentials': 'include',
                    'mode': 'cors',
                    'headers': {
                        'token' : token,
                        'accept': 'application/json, text/plain, */*', 'content-type': 'application/json'
                    }
                }
            }
        }),

        // Delete
        deleteTweet: builder.mutation({
            query: ({ token, id }) => {

                return {
                    url: `/api/forum/${id}`,
                    method: "DELETE",
                    'credentials': 'include',
                    'mode': 'cors',
                    'headers': {
                        'token' : token,
                        'accept': 'application/json, text/plain, */*', 'content-type': 'application/json'
                    }
                }
            }
        }),

        // Comment
        commentTweet: builder.mutation({
            query: ({ id, data }) => {
                return ({
                    url: `api/forum/comment/${id}`,
                    method: 'POST',
                    body: { comment: data.comment, commetedUser: data.commetedUser },
                    'credentials': 'include',
                    'mode': 'cors',
                    'headers': {
                        'accept': 'application/json, text/plain, */*', 'content-type': 'application/json'
                    }
                })
            }
        })

    })


})

export const { useCommentTweetMutation, useGetAllTweetsQuery, useLazyGetAllTweetsQuery, useCreateTweetMutation, useLikeTweetMutation, useDeleteTweetMutation } = forumApi
export default forumApi