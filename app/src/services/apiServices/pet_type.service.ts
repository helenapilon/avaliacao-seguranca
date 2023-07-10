//@ts-nocheck
import api from "../api";

const getAll = (name) => {
  return api.get("/type", {
    params: {
      name: name,
    },
  });
};

const get = (id) => {
  return api.get(`/type/${id}`);
};

const create = (data) => {
  return api.post("/type", data);
};

const update = (id, data) => {
  return api.put(`/type/${id}`, data);
};

const remove = (id) => {
  return api.delete(`/type/${id}`);
};

const removeAll = () => {
  return api.delete(`/type`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};
