import {
  getRandomBirthDate,
  randomFirstName,
  randomLastName,
} from "./random-generator";

import { addUser } from "./user-api";

function createRandomUser() {
  const user = {
    firstName: randomFirstName,
    lastName: randomLastName,
    birthDate: getRandomBirthDate(),
  };
  addUser(user).then();
}

export { createRandomUser };
