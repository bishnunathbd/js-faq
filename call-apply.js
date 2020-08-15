const normalPerson = {
    firstName: 'Karim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const zeroPerson = {
    firstName: 'Zero',
    lastName: 'Bishnu',
    salary: 10000
}


// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const zeroChargeBill = normalPerson.chargeBill.bind(zeroPerson);
// zeroChargeBill(2000);

// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary);
// normalPerson.chargeBill.call(zeroPerson, 3000, 100, 10);
// console.log(zeroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
console.log(heroPerson.salary);