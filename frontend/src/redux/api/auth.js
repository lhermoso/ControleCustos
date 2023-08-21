import BaseApi from './BaseApi';

export const authApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({

    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/accounts/login/',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
} = authApi;
