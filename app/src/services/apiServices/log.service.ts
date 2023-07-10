//@ts-nocheck
import api from "../api";

const getAll = (description) => {
  return api.get("/log", {
    params: {
      description: description,
    },
  });
};

const getByUser = (id) => {
  return api.get(`/log/user/${id}`);
};

const get = (id) => {
  return api.get(`/log/${id}`);
};

const create = (data) => {
  return api.post("/log", data);
};

const update = (id, data) => {
  return api.put(`/log/${id}`, data);
};

const remove = (id) => {
  return api.delete(`/log/${id}`);
};

const removeAll = () => {
  return api.delete(`/log`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  getByUser,
};
