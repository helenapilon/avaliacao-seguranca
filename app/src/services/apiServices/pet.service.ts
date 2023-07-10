//@ts-nocheck
import api from "../api";

const getAll = (name) => {
  return api.get("/pet", {
    params: {
      name: name,
    },
  });
};

const get = (id) => {
  return api.get(`/pet/${id}`);
};

const create = (data) => {
  return api.post("/pet", data);
};

const update = (id, data) => {
  return api.put(`/pet/${id}`, data);
};

const remove = (id) => {
  return api.delete(`/pet/${id}`);
};

const removeAll = () => {
  return api.delete(`/pet`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};
