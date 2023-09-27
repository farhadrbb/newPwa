import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseUrl";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        auth: builder.query({
            query: (infoApi) => ({
                url: `https://mbt.tejaratbank.ir/api/${infoApi.url}`,
                // method: "POST",
                params: infoApi.param || undefined,
            }),
        }),
        authPost: builder.query({
            query: (infoApi) => ({
                url: `https://mbt.tejaratbank.ir/api/${infoApi.url}`,
                method: "POST",
                body: infoApi.body || undefined,
            }),
        }),
    }),
});

export const {
    useLazyAuthQuery,
    useLazyAuthPostQuery
} = authApi;

