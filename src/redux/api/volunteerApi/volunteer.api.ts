import { baseApi } from "../baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createVolunteer: builder.mutation({
      query: (data) => ({
        url: "/create-volunteer",
        method: "POST",
        body: data,
      }),
    }),

    getAllVolunteers: builder.query({
      query: () => ({
        url: "/volunteers",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateVolunteerMutation, useGetAllVolunteersQuery } =
  volunteerApi;
