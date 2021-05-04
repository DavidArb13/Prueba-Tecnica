import {cleanConsole, createAll} from './data';

const companies = createAll();

cleanConsole(6, companies);

const ejercicio6 = (companies) => {
  const concate = {};
  companies.forEach((company) => {
    company.users.forEach((user) => {
      concate[user.lastName + user.firstName +user.age] = user.car;
    });
  });
  return concate;
};
console.log(ejercicio6(companies));

console.log('---- EXAMPLE 6 --- ', companies);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un nuevo objeto cuyos atributos son la concatenación del apelido, nombre y
// edad de cada "user". Cada atributo debe tener el valor de boolean "car".
// Ver ejemplo a continuación.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a new object whose attributes are the concatenation of the name, first name and
// the age of each user. Each attribute must have the value of boolean "car".
// See example below


