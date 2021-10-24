import { getUsers } from "./user-api.js";
import { createRandomUser } from "./create-user.js";

const userCount = parseInt(process.argv[2]);

const main = async () => {
  console.log(await getUsers());

  const userList = [];

  for (let i = 0; i < userCount; i++) {
    userList.push(createRandomUser());
  }
  await Promise.all(userList);
};

main().then();
