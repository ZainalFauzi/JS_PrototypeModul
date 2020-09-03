import {animals, fruits} from "./data.js";
//import karyawan from "./karyawan.js"

document.getElementById("animals").innerHTML = animals;
console.log(animals)
document.getElementById("fruits").innerHTML = fruits;
console.log(fruits)
//console.log(karyawan)

/*import employee from "./karyawan.js";


let employee1 = {
    employeeName: karyawan.prototype.name,
    employeePosition: karyawan.prototype.Position,
    employeeAge: karyawan.prototype.age
}

console.log(employee1)*/


import Employee from './karyawan.js';

let newEmployee = new Employee ("prutang", "gardener", 55);

console.log(newEmployee);
document.getElementById("nama karyawan").innerHTML = newEmployee.name;
document.getElementById("posisi karyawan").innerHTML = newEmployee.position;
document.getElementById("umur karyawan").innerHTML = newEmployee.age;