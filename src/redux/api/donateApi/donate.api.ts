import { baseApi } from "../baseApi";

export const donateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDonate: builder.mutation({
      query: (data) => ({
        url: "/create-donate",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["donates"],
    }),

    getAllDonate: builder.query({
      query: () => ({
        url: "/donates",
        method: "GET",
      }),
      providesTags: ["donates"],
    }),
  }),
});

export const { useCreateDonateMutation, useGetAllDonateQuery } = donateApi;
