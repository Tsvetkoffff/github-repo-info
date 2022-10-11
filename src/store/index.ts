import {configureStore} from '@reduxjs/toolkit'
import {githubApi} from './github/github.api'

const reducer = {
  [githubApi.reducerPath]: githubApi.reducer,
}

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(githubApi.middleware),
})
