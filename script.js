// Task 1

// class Book {
//     title;
//     author;
//     pages;
//     constructor(title, author, pages) {
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
//     }
//     displayInfo() {
//         console.log(`Книга: ${this.title}\nАвтор: ${this.author}\nКоличество страниц: ${this.pages}`);
//     }
// };

// const newBook = new Book('1984', 'Джордж Оруэлл', 234);
// newBook.displayInfo();

// Task 2

// class Student {
//     name;
//     age;
//     grade;
//     constructor(userName, userAge, userGrade) {
//         this.name = userName;
//         this.age = userAge;
//         this.grade = userGrade;
//     }
//     displayInfo() {
//         console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`);
//     }
// };

// const student1 = new Student('John Smith', 17, '10th grade');
// student1.displayInfo();

// const student2 = new Student('Slava Dobrov', 16, '9th grade');
// student2.displayInfo();

// Task 3

class Bank {
    BankName;
    clientCounter() {
        let counter = 0;
        return () => {
            counter += 1;
            return counter;
        };
    };
    counter = this.clientCounter();
    constructor(userBank) {
        this.BankName = userBank;
    };
    clients = []
    addClient(client) {
        this.clients.push(client);
    };
    openAccount(client, savings) {
        this.clients.forEach(element => {
            if (element === client) {
                element.accountNumber = this.counter();
                element.savings = savings;
            }
        });
    };
    deposit(userAccount, amount) {
        this.clients.forEach(element => {
            if (element.accountNumber == userAccount) {
                element.savings += amount;
            }
        });
    };
    withdraw(userAccount, amount) {
        this.clients.forEach(element => {
            if (element.accountNumber == userAccount) {
                if (element.savings < amount) {
                    console.log(`У клиента с номером аккаунта ${element.accountNumber} недостаточно средств`);
                } else {
                    element.savings -= amount;
                }
            }
        });
    };
    checkBalance(userAccount) {
        this.clients.forEach(element => {
            if (element.accountNumber === userAccount) {
                console.log(element.savings);
            }
        });
    }
};

class Client {
    name;
    age;
    constructor(userName, userAge) {
        this.name = userName;
        this.age = userAge;
    };
};

const newBank = new Bank('MG - Money Giver');
const client1 = new Client('Slava', 27);
const client2 = new Client('Michael', 35);
newBank.addClient(client1);
newBank.addClient(client2);
newBank.openAccount(client1, 1000);
newBank.openAccount(client2, 9900);
newBank.deposit(1, 200);
newBank.deposit(2, 200);
newBank.withdraw(1, 100);
newBank.withdraw(2, 100);
newBank.checkBalance(1);
newBank.checkBalance(2);
newBank.withdraw(1, 10000);