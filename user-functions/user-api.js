import fetch from "node-fetch";

const apiBase = "http://localhost:3000";

const Endpoints = {
  users: "/users",
};

const getUsers = async () => {
  const response = await fetch(`${apiBase}${Endpoints.users}`);
  return await response.json();
};

const addUser = async (user) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}`, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(user),
  });

  return await newUserResponse.json();
};

const deleteUser = async (id) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}/${id}`, {
    method: "DELETE",
  });
  return await newUserResponse.json();
};

const replaceUser = async (id, newUser) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(newUser),
  });

  return await newUserResponse.json();
};

const updateUser = async (id, newUserFields) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(newUserFields),
  });

  return await newUserResponse.json();
};

export { getUsers, addUser, deleteUser, replaceUser, updateUser };
