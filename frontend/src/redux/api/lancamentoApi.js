import BaseApi from './BaseApi';

export const lancamentoApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({

    getEntries: builder.query({
      query: () => '/controle/lancamento',

    }),

  }),
});

export const {
  useGetEntriesQuery,

} = lancamentoApi;
