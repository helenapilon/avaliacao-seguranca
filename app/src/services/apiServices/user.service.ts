//@ts-nocheck
import api from "../api";

const getAll = (name) => {
  return api.get("/user", {
    params: {
      name: name,
    },
  });
};

const get = (id) => {
  return api.get(`/user/${id}`);
};

const create = (data) => {
  return api.post("/user", data);
};

const signIn = (data) => {
  return api.post("/user/login", data);
};

const update = (id, data) => {
  return api.put(`/user/${id}`, data);
};

const remove = (id) => {
  return api.delete(`/user/${id}`);
};

export default {
  getAll,
  get,
  signIn,
  create,
  update,
  remove,
};
