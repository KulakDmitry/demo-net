const firstName = ["Dima", "Max", "Oleg", "Vlad", "Anton"];
const lastName = ["Ivanov", "Petrov", "Sidorov", "Smirnov", "Novikov"];

const today = new Date();
const year = today.getFullYear();

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBirthDate() {
  return [
    getRandomNumber(1, 28),
    getRandomNumber(1, 12),
    year - getRandomNumber(13, 18),
  ].join("/");
}

const randomFirstName = firstName[getRandomIndex(firstName)];
const randomLastName = lastName[getRandomIndex(lastName)];

export { randomLastName, randomFirstName, getRandomBirthDate };
