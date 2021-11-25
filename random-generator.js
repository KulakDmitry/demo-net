const firstName = ["Dima", "Max", "Oleg", "Vlad", "Anton"];
const lastName = ["Ivanov", "Petrov", "Sidorov", "Smirnov", "Novikov"];

const today = new Date();
const year = today.getFullYear();

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function getRandomBirthDate() {
  return new Date(
    year - getRandomNumber(13, 18),
    getRandomNumber(1, 12),
    getRandomNumber(1, 28)
  );
}

const randomFirstName = () => {
  return firstName[getRandomIndex(firstName)];
};
const randomLastName = () => {
  return lastName[getRandomIndex(lastName)];
};

const replaceNewUser = () => {
  return {
    firstName: randomFirstName(),
    lastName: randomLastName(),
    birthDate: getRandomBirthDate(),
  };
};

const newUserFields = () => {
  return {
    firstName: randomFirstName(),
  };
};

const randomUserId = (users) => {
  const usersId = users.map((user) => user.id);
  return usersId[getRandomNumber(0, usersId.length - 1)];
};

export {
  randomLastName,
  randomFirstName,
  getRandomBirthDate,
  getRandomNumber,
  newUserFields,
  replaceNewUser,
  randomUserId,
};
