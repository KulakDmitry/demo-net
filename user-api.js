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

export { getUsers, addUser };
