import { login } from "@/api/user";
import { Message } from "element-ui";
import router from "@/router";
export default {
  namespaced: true,
  state: {
    token: "",
    success: "",
    msg: "",
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload.token;
      state.success = payload.success;
      state.msg = payload.msg;
    },
  },
  actions: {
    async getToken({ commit }, payload) {
      const res = await login(payload);
      if (res.data.success) {
        commit("setToken", res.data);
        router.push("/");
        Message.success(res.data.msg);
      } else {
        Message.error(res.data.msg);
      }
    },
  },
};
