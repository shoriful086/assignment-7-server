import { baseApi } from "../baseApi";

export const donateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCommunityPost: builder.mutation({
      query: (data) => ({
        url: "/create-community",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["community"],
    }),

    getAllCommunityPost: builder.query({
      query: () => ({
        url: "/community",
        method: "GET",
      }),
      providesTags: ["community"],
    }),
  }),
});

export const { useCreateCommunityPostMutation, useGetAllCommunityPostQuery } =
  donateApi;
