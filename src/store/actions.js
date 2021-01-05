import * as types from "./constants"
export const signup_post_api_v1_signup_read = data => ({
  type: types.SIGNUP_POST_API_V1_SIGNUP_READ,
  data
})

export const signup_post_api_v1_signup_readSucceeded = (response, starter) => ({
  type: types.SIGNUP_POST_API_V1_SIGNUP_READ_SUCCEEDED,
  response,
  starter
})

export const signup_post_api_v1_signup_readFailed = (response, starter) => ({
  type: types.SIGNUP_POST_API_V1_SIGNUP_READ_FAILED,
  response,
  starter
})
