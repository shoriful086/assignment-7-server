import { baseApi } from "../baseApi";

const testimonialsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTestimonial: builder.mutation({
      query: (data) => ({
        url: "/create-testimonial",
        method: "POST",
        body: data,
      }),
    }),

    getAllTestimonials: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET",
      }),
    }),
  }),
});
export const { useCreateTestimonialMutation, useGetAllTestimonialsQuery } =
  testimonialsApi;
