function printUserForAge(user, age) {
  console.log(
    `id: ${user.id}, ${user.firstName} ${user.lastName}, ${user.birthDate}  - ${age} user`
  );
}

function printSortedByFirstName(user) {
  console.log(`id: ${user.id} ${user.firstName} ${user.lastName} `);
}

function printSortedByLastName(user) {
  console.log(`id: ${user.id} ${user.lastName} ${user.firstName} `);
}

export { printUserForAge, printSortedByLastName, printSortedByFirstName };
