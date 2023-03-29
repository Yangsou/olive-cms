import {getIdToken, getAuth, User} from 'firebase/auth'

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/react-hooks';
import { getFirebaseApp } from '@/services';

export const httpLink = new HttpLink({
  uri: import.meta.env.VITE_HASURA_END_POINT,
  fetch: async (uri, options) => {
    const token = await getIdToken(getAuth(getFirebaseApp())?.currentUser as User, true)

    return fetch(uri, {
      ...options,
      headers: {
        ...options?.headers,
        authorization: `Bearer ${token}`
      }
    })
  }
});


export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});