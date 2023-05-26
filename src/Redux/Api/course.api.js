import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const courseApi = createApi({
    reducerPath: "coursesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://resoursehack.api.abduljabbardev.xyz" }),
    tagTypes: ['course'],
    endpoints: (builder) => ({

        getCourse: builder.query({
            query: (limit) => `/course?limit=${limit}`,
            providesTags: ["course"]
        }),


        getCoursBySearch: builder.query({
            query: ({ searchString, count }) => (searchString?.length > 1) ? `/course?search=${searchString}` : `/course?limit=${count}`,
            providesTags: ["course"]
        }),




        getASingleCourse: builder.query({
            query: (id) => `/course/${id}`,
            providesTags: ["course"]
        }),
        postCourse: builder.mutation({
            query: (data) => ({
                url: '/course',
                body: data,
                method: "POST"
            }),
            invalidatesTags: ["course"]
        }),
        updateCourse: builder.mutation({
            query: ({ courseId, data }) => {
                return ({
                    url: `/course/${courseId}`,
                    body: data,
                    method: "PUT"
                })
            },
            invalidatesTags: ["course"]
        }),
        deleteACourse: builder.mutation({
            query: (courseId) => ({
                url: `/course/${courseId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["course"]
        })

    })
})

export const { useGetCourseQuery, usePostCourseMutation, useDeleteACourseMutation, useUpdateCourseMutation, useGetASingleCourseQuery, useGetCoursBySearchQuery } = courseApi    