const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        this.salary -= amount;
        return this.salary;
    }
}

console.log(normalPerson.salary);
normalPerson.chargeBill(150);
console.log(normalPerson.salary);
normalPerson.chargeBill(1500);
console.log(normalPerson.salary);
