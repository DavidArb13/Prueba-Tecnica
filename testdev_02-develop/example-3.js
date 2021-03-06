import {cleanConsole, createAll} from './data';
import ejercicio1 from './example-1';

const companies = createAll();

cleanConsole(3, companies);
const ejercicio3 = (companies) => {
  ejercicio1(companies);
  let status = true;
  companies.forEach((company) => {
    company.users.forEach((user) => {
      if ( user.firstName.charAt(0) !== user.firstName.charAt(0).toUpperCase() ) {
        status = false;
      }
      if ( user.lastName.charAt(0) !== user.lastName.charAt(0).toUpperCase() ) {
        status = false;
      }
    });
    if ( company.name.charAt(0) !== company.name.charAt(0).toUpperCase() ) {
      status = false;
    }
  });
  return status;
};
console.log(ejercicio3(companies));

console.log('---- EXAMPLE 3 --- ', companies);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js"
