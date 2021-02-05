const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        console.log(this.salary);
        this.salary -= amount;
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

const aChargeBill = normalPerson.chargeBill.bind(aPerson);
aChargeBill(1000);
console.log(aPerson.salary);

const bChargeBill = normalPerson.chargeBill.bind(bPerson);
bChargeBill(1000);
console.log(bPerson.salary);
