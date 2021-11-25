import { deleteRandomUsers } from "./delete-user.js";
import { getUsers, replaceUser } from "./user-api.js";
import { randomUserId, replaceNewUser } from "../random-generator.js";
import { sortByAge } from "./sorted-users.js";

async function replaceRandomUser() {
  await deleteRandomUsers();
  await sortByAge();

  const users = await getUsers();

  replaceUser(randomUserId(users), replaceNewUser()).then();
}

export { replaceRandomUser };
