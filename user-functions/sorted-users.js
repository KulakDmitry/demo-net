import { getUsers } from "./user-api.js";
import { updateRandomUser } from "./update-user.js";
import {
  printSortedByFirstName,
  printSortedByLastName,
  printUserForAge,
} from "../print-functions.js";

async function alphabetSort() {
  await updateRandomUser();
  await sortByAge();

  const users = await getUsers();

  const sortedByFirstNames = [...users].sort((a, b) =>
    a.firstName !== b.firstName
      ? a.firstName < b.firstName
        ? -1
        : 1
      : a.lastName < b.lastName
      ? -1
      : 1
  );

  const sortedByLastNames = [...users].sort((a, b) =>
    a.lastName !== b.lastName
      ? a.lastName < b.lastName
        ? -1
        : 1
      : a.firstName < b.firstName
      ? -1
      : 1
  );

  sortedByLastNames.forEach((i) => printSortedByLastName(i));
  sortedByFirstNames.forEach((i) => printSortedByFirstName(i));
}

async function sortByAge() {
  const users = await getUsers();

  const sortedUsersByAge = users.sort((a, b) =>
    a.birthDate > b.birthDate ? 1 : -1
  );

  const oldest = sortedUsersByAge[0];
  const youngest = sortedUsersByAge[sortedUsersByAge.length - 1];

  printUserForAge(oldest, "oldest");
  printUserForAge(youngest, "youngest");
}

export { alphabetSort, sortByAge };
