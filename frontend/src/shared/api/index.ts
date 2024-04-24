import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ITodoResponse {
  id: number;
  is_checked: boolean;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export const todoApi = createApi({
  reducerPath: "todo",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    getTodoList: builder.query<ITodoResponse[], null>({
      query: () => "todo",
    }),
    createTask: builder.mutation<ITodoResponse, ITodoResponse>({
      query: (task) => ({
        url: "todo",
        method: "POST",
        body: task,
      }),
      transformResponse: (response: ITodoResponse) =>
        response /**https://redux-toolkit.js.org/rtk-query/usage/customizing-queries */,
    }),
    updateTask: builder.mutation<ITodoResponse, ITodoResponse>({
      query: (task) => ({
        url: "todo",
        method: "PUT",
        body: task,
      }),
    }),
    deleteTask: builder.mutation<ITodoResponse, number>({
      query: (id) => ({
        url: `todo/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useGetTodoListQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = todoApi;
