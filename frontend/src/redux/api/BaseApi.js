import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '../../constants/defaultValues';
import { removeUser, setUser } from '../slices/userSlice';
import { removeTokens, setAccessToken, setTokens } from '../slices/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: 'same-origin',
  prepareHeaders: (headers, { getState }) => {
    const { tokens } = getState().auth;

    if (tokens.access) {
      headers.set('authorization', `Bearer ${tokens.access}`);
      headers.set('Content-Type', 'application/json');
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (api.endpoint === 'login' && result.data) {
    api.dispatch(setUser(result.data));
    api.dispatch(setTokens(result.data));
  }

  if (result.error && result.error.status === 401) {
    // try to get a new token
    const { tokens } = api.getState().auth;
    const refreshResult = await baseQuery(
      {
        url: '/accounts/token/refresh/',
        method: 'POST',
        body: { refresh: tokens.refresh },
      },
      api,
      extraOptions,
    );
    if (refreshResult.data) {
      api.dispatch(setAccessToken(refreshResult.data));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(removeUser());
      api.dispatch(removeTokens());
    }
  }
  return result;
};

// eslint-disable-next-line import/prefer-default-export
const baseApi = createApi({
  tagTypes: ['User', 'Lancamento'],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});

export default baseApi;
