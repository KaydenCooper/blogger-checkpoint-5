import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
    activeComments: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setAllBlogs(state, blogs) {
      state.blogs = blogs;
    },
    setActiveBlog(state, payload) {
      state.activeBlog = payload.blog;
      state.activeComments = payload.comments
    },
  },
  actions: {

    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async editBlog({ dispatch }, updatedBlog) {
      try {
        let res = await api.put("blogs/" + updatedBlog.id, updatedBlog.data)
        dispatch("setActiveBlog")
      } catch (error) {
        console.error(error);
      }
    },
    async deleteComment({ commit, dispatch }, commentId) {
      try {
        debugger
        let res = await api.delete("comments/" + commentId)
        commit("setActiveBlog", {})




      } catch (error) {
        console.error(error);
      }
    },
    async addComment({ commit, dispatch, state }, blogDetailsData) {
      try {

        let res = await api.post("comments/", blogDetailsData)
        commit("setActiveBlog", res.data)
        dispatch("getBlog", blogDetailsData.blogId)
      } catch (error) {
        console.error(error);
      }
    },
    async deleteBlog({ commit, dispatch, state }, blogId) {
      try {
        let res = await api.delete("blogs/" + blogId)
        router.push({ name: "Home" })
        commit("setActiveBlog", {})
      } catch (error) {
        console.error(error);
      }
    },
    async newBlog({ commit, dispatch }, blogData) {
      try {
        let res = await api.post("blogs", blogData)
        dispatch("getAllBlogs")
      } catch (error) {
        console.error(error);
      }
    },
    async getBlog({ commit }, blogId) {
      try {
        let res = await api.get("blogs/" + blogId)
        console.log(res.data);
        commit("setActiveBlog", res.data)

      } catch (error) {
        console.error(error);
      }
    },
    async getAllBlogs({ commit, dispatch }) {
      try {
        let res = await api.get("blogs")
        console.log(res.data);
        commit("setAllBlogs", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
