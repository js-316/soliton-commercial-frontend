import { apiSlice } from "../../api/apiSlice";
import { logout } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    getBakoziOauthURL: builder.query({
      query: () => "/auth/bakozi_oauth_url/",
      providesTags: ["BakoziOauthURL"],
    }),
    loginWithBakozi: builder.mutation({
      query: (body) => ({
        url: "/auth/login_with_bakozi/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register/",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout/",
        method: "POST",
      }),
      invalidatesTags: ["User"],
      onQueryStarted: (arg, { dispatch }) => {
        dispatch(logout());
      },
    }),
    changePassword: builder.mutation({
      query: (body) => ({
        url: "/change-password/", 
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    oauthLogin: builder.mutation({
      query: (body) => ({
        url: "/oauth-login/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    oauthCallback: builder.mutation({
      query: (code) => ({
        url: `/auth/callback/?code=${code}`,
        method: "GET",
      }),
      invalidatesTags: ["User"],
    }),
    passwordResetRequest: builder.mutation({
      query: (data) => ({
        url: '/password_reset/',
        method: 'POST',
        body: data,
      }),
    }),
    passwordResetConfirm: builder.mutation({
      query: ({ uidb64, token, password }) => ({
        url: `/reset-password/${uidb64}/${token}/`,
        method: 'POST',
        body: { password },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useChangePasswordMutation,
  useOauthLoginMutation,
  useOauthCallbackMutation,
    useGetBakoziOauthURLQuery,
    useLoginWithBakoziMutation,
    usePasswordResetRequestMutation, usePasswordResetConfirmMutation,
} = authApiSlice;

