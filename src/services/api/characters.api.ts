import apiClient from ".";

export const getCharacters = async (params: any) =>
  apiClient
    .get(`characters`, { params })
    .then((res) => res.data)
    .catch((err) => Promise.reject({ ...err }));
