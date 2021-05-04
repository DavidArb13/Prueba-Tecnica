import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(4, companies);

const ejercicio4 = (companies) => {
  const tabla = [];
  companies.forEach((company) => {
    company.users.forEach((user) => {
      // |...user| todo los valores de elemnto, luego setea un nuevo valor al elemento creado.
      tabla.push({...user, company: company.name});
    });
  });
  tabla.sort(( a, b ) => {
    return (a.age > b.age)?-1:(a.age < b.age)?1:0;
  });
  return tabla;
};

console.log(ejercicio4(companies));

console.log('---- EXAMPLE 4 --- ', companies);

export default ejercicio4;
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the "companies" variable and grouping
// all "users" of all "companies" in a single table. Each "user"
// must have a new attribute "company" having for value the name of the "company"
// to which it belongs. The "users" must be sorted according to their
// age (from oldest to youngest)
