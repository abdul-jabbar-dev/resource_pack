import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const courseApi = createApi({
    reducerPath: "coursesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
    tagTypes: ['course'],
    endpoints: (builder) => ({

        getCourse: builder.query({
            query: () => `/course`,
            providesTags:["course"]
        }),
        postCourse: builder.mutation({
            query: (data) => ({
                url: '/course',
                body: data,
                method: "POST"
            }),
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

export const { useGetCourseQuery, usePostCourseMutation, useDeleteACourseMutation } = courseApi    