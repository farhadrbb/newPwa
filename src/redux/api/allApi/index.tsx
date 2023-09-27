import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseUrl";
import {API_CALL_CONSTANTS} from '../../../common/serverUrl'

export const allApi = createApi({
    reducerPath: "allApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getAllData: builder.query({
            query: (infoApi) => ({
                url: `${API_CALL_CONSTANTS[infoApi.url]}`,
                // method: "POST",
                params: infoApi.param || undefined,
            }),
        }),
        postAllData: builder.mutation({
            query: (infoApi) => ({
                url: `${API_CALL_CONSTANTS[infoApi.url]}`,
                method: "POST",
                // params: infoApi.filter || undefined,
                body: infoApi.body || undefined,

            }),
        }),
    }),
});

export const {
    usePostAllDataMutation,
    useLazyGetAllDataQuery
} = allApi;

