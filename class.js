class Person {
    constructor(firstname, lastname, salary){
        this.firstname = firstname;
        this.lastname = lastname;
        this.salary = salary;
    }
}

const aPerson = new Person('Abul', 'Mia', 15000);
console.log(aPerson);

const bPerson = new Person('Babul', 'Mia', 18000);
console.log(bPerson);
