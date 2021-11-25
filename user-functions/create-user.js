import {
  getRandomBirthDate,
  getRandomNumber,
  randomFirstName,
  randomLastName,
} from "../random-generator.js";

import { addUser } from "./user-api.js";

function createRandomUser() {
  const user = {
    firstName: randomFirstName(),
    lastName: randomLastName(),
    birthDate: getRandomBirthDate(),
  };
  addUser(user).then();
}

async function createUsers() {
  const count = getRandomNumber(10, 30);
  for (let i = 0; i < count; i++) {
    createRandomUser();
  }
}

export { createRandomUser, createUsers };
