import { alphabetSort } from "./user-functions/sorted-users.js";

async function main() {
  await alphabetSort();
}

for (let i = 0; i < 5; i++) {
  //Repeat 5 times
  await main();
}
