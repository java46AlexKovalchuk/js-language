
//HW-17
//1.
function countOfPersonType(persons, type){
      return persons.filter(n => n.constructor.name === type).length;
}  

//2. 
function computeSalaryBudget(persons){
return persons.reduce((sum, el) => el.constructor.name !== 'Child' && el.computeSalary() ? sum += el.computeSalary() : 0);
}

//3.
function countChildrenKindergarten(persons, kindergarten) {
return persons.reduce((res, el) => {el.constructor.name === 'Child' && 
                                    el.getKindergarten() === kindergarten
                                    && res++; return res}, 0);
}


//create object (from classwork)
class Person {
      #id;
      #name;
      constructor(id, name) {
              this.#id = id;
              this.#name = name
      }
      getId() {
              return this.#id;
      }
      getName() {
              return this.#name
      }
      toString() {
              return `id: ${this.#id}; name: ${this.#name};`
      }
}

class Employee extends Person {
      #salary;
      constructor(id, name,salary){
           super(id, name)  
           this.#salary = salary;
      }
      computeSalary(){
            return this.#salary;
      }
      toString(){
            return super.toString() + ` salary: ${this.computeSalary()}`;
      }
}

class Child extends Person {
      #kindergarten;
      constructor(id, name, kindergarten){
            super(id, name);
            this.#kindergarten = kindergarten;
      }
      getKindergarten(){
            return this.#kindergarten;
      }
      toString(){
            return `${super.toString()} kindergarten ${this.#kindergarten}`; 
      }
}

class WageEmployee extends Employee {
      #hours;
      #wage;
      constructor(id, name, salary, hours, wage){
            super(id, name, salary)
            this.#hours = hours;
            this.#wage = wage;
      }
      computeSalary(){
            return super.computeSalary() + this.#hours * this.#wage;
      }
}

const persons = [
  new Child(100, 'Olya', 'Shalom'), 
  new Child(101, 'Serega', 'Boker'),
  new Child(102, 'Kolya', 'Shalom'),
  new Employee(103, 'Vasya', 1000),
  new WageEmployee(104, 'Tolya', 1000, 10, 100)
]


//test
const numType = countOfPersonType(persons, 'Child');  
console.log(`Object "persons" contains ${numType} person of given type`);
console.log(`Common salaries budget: ${computeSalaryBudget(persons)}`);
console.log(countChildrenKindergarten(persons, 'Shalom'));


