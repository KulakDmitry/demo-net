import { deleteUser, getUsers } from "./user-api.js";
import { randomUserId } from "../random-generator.js";
import { createUsers } from "./create-user.js";

async function deleteRandomUsers() {
  await createUsers();

  for (let i = 0; i < 5; i++) {
    const users = await getUsers();
    deleteUser(randomUserId(users)).then();
  }
}

export { deleteRandomUsers };
