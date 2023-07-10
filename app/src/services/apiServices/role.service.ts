//@ts-nocheck
import api from "../api";

const getAll = (name) => {
  return api.get("/role", {
    params: {
      name: name,
    },
  });
};

const get = (id) => {
  return api.get(`/role/${id}`);
};

const create = (data) => {
  return api.post("/role", data);
};

const update = (id, data) => {
  return api.put(`/role/${id}`, data);
};

const remove = (id) => {
  return api.delete(`/role/${id}`);
};

const removeAll = () => {
  return api.delete(`/role`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};
