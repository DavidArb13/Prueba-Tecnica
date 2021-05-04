import {cleanConsole, createAll} from './data';
import ejercicio4 from './example-4';
const companies = createAll();

cleanConsole(5, companies);

const ejercicio5 = (companies) => {
  let sumaAge = 0;
  const tabla = ejercicio4(companies);
  tabla.forEach((item) => {
    sumaAge = sumaAge + item.age;
  });
  const promedio = sumaAge/tabla.length;
  let sumaAgaCar = 0;
  let usersCar = 0;
  tabla.forEach((item) => {
    if (item.car == true) {
      usersCar++;
      sumaAgaCar = sumaAgaCar + item.age;
    }
  });
  const promedioAgeCars = sumaAgaCar/usersCar;
  return {size: tabla.length, average: promedio, hasCar: usersCar, averageWithCar: promedioAgeCars};
};
console.log(ejercicio5(companies));

console.log('---- EXAMPLE 5 --- ', companies);
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car.
