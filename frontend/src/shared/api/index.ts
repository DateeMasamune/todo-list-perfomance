import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodoResponse } from "../types";

const TODO_TAG = "TODO_TAG";

export const todoApi = createApi({
  reducerPath: "todo",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: [TODO_TAG],
  endpoints: (builder) => ({
    getTodoList: builder.query<ITodoResponse[], null>({
      query: () => "todo",
      providesTags: [TODO_TAG],
    }),
    createTask: builder.mutation<
      ITodoResponse,
      Omit<ITodoResponse, "id" | "is_checked" | "created_at" | "updated_at">
    >({
      query: (task) => ({
        url: "todo",
        method: "POST",
        body: task,
      }),
      invalidatesTags: [TODO_TAG],
      transformResponse: (response: ITodoResponse) =>
        response /**https://redux-toolkit.js.org/rtk-query/usage/customizing-queries */,
    }),
    updateTask: builder.mutation<
      ITodoResponse,
      Omit<ITodoResponse, "updated_at">
    >({
      query: (task) => ({
        url: "todo",
        method: "PUT",
        body: task,
      }),
      invalidatesTags: [TODO_TAG],
    }),
    deleteTask: builder.mutation<ITodoResponse, number>({
      query: (id) => ({
        url: `todo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TODO_TAG],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useGetTodoListQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = todoApi;
