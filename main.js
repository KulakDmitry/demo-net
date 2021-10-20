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

const main = async () => {
  console.log(await getUsers());
  let count = process.argv[2];
  const user = randomUser(count); // count of users
  console.log(await addUser(user));
};

main().then();

function randomUser(count) {
  const firstName = ["Dima", "Max", "Oleg", "Vlad", "Anton"];
  const lastName = ["Ivanov", "Petrov", "Sidorov", "Smirnov", "Novikov"];

  function getRandomNumber(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function getRandomDate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let today = new Date();
  let year = today.getFullYear();
  const users = [];

  for (let user = 0; user < count; user++) {
    users.push({
      firstName: firstName[getRandomNumber(firstName)],
      lastName: lastName[getRandomNumber(lastName)],
      birthDate:
        getRandomDate(1, 28) +
        "/" +
        getRandomDate(1, 12) +
        "/" +
        Math.abs(year - getRandomDate(13, 18)),
    });
  }
  return users;
}
