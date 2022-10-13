// Need to use the React-specific entry point to allow generating React hooks
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IRepo, IUser, ServerResponse} from '../../models/models'

// Define a service using a base URL and expected endpoints
export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com'}),
  endpoints: builder => ({
    searchUsers: builder.query<IUser[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    getUserRepos: builder.query<IRepo[], string>({
      query: (user: string) => ({
        url: `users/${user}/repos`,
      }),
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {useSearchUsersQuery, useLazyGetUserReposQuery} = githubApi
