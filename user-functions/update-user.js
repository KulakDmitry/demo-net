import { getUsers, updateUser } from "./user-api.js";
import { newUserFields, randomUserId } from "../random-generator.js";
import { replaceRandomUser } from "./replace-user.js";
import { sortByAge } from "./sorted-users.js";

async function updateRandomUser() {
  await replaceRandomUser();
  await sortByAge();

  const users = await getUsers();

  updateUser(randomUserId(users), newUserFields()).then();
}

export { updateRandomUser };
