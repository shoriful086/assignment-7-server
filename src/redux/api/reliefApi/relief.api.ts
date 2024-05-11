import { baseApi } from "../baseApi";

export const reliefApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRelief: builder.mutation({
      query: (data) => ({
        url: "/create-relief",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["relief"],
    }),

    getAllRelief: builder.query({
      query: () => ({
        url: "/reliefs",
        method: "GET",
      }),
      providesTags: ["relief"],
    }),

    getSingleRelief: builder.query({
      query: (id) => ({
        url: `/reliefs/${id}`,
        method: "GET",
      }),
    }),

    deleteRelief: builder.mutation({
      query: (id) => ({
        url: `/reliefs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["relief"],
    }),
    updateRelief: builder.mutation({
      query: ({ data, id }) => ({
        url: `/reliefs/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["relief"],
    }),
  }),
});

export const {
  useCreateReliefMutation,
  useGetAllReliefQuery,
  useGetSingleReliefQuery,
  useDeleteReliefMutation,
  useUpdateReliefMutation,
} = reliefApi;
