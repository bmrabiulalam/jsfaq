const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips, tax) {
        console.log(this.salary);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const aPerson = {
    firstName: 'Karim',
    lastName: 'Uddin',
    salary: 25000
}

const bPerson = {
    firstName: 'Solim',
    lastName: 'Uddin',
    salary: 18000
}

// normalPerson.chargeBill.call(aPerson, 900, 100, 10);
// console.log(aPerson.salary);

// normalPerson.chargeBill.call(bPerson, 3000, 300, 30);
// console.log(bPerson.salary);

normalPerson.chargeBill.apply(aPerson, [1000, 90, 10]);
console.log(aPerson.salary);

normalPerson.chargeBill.apply(bPerson, [2000, 90, 10]);
console.log(bPerson.salary);
