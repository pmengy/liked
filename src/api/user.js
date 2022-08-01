import request from "@/utils/request";

/**
 * 用户登录接口
 * @param {Object} data loginName password
 * @returns promise
 */
export function login(data) {
  return request({
    url: "/user-service/user/login",
    method: "post",
    data,
  });
}
