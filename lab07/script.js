//1
let person = {
    name: "German",
    age: 18,
    greet() {
        console.log("Привет, " + this.name);
    },
    ageAfterYears(years) {
        return this.age + years;
    }
}

//2
let car = {
    model: "Geely",
    year: 2022,
    getInfo() {
        console.log(model + " " + year);
    }
}

//3
function Book(Title, Author) {
    this.Title = Title;
    this.Author = Author;

    this.getTitle = function () {
        return this.Title;
    }

    this.getAuthor = function () {
        return this.Author;
    }
}

let book = new Book("hello", "world");
console.log(book.getAuthor());
console.log(book.getTitle());

//4
let team = {
    players: ["Иван", "Андрей", "Артём", "Вадим"],
    getPlayers() {
        this.players.forEach(
            function (player) {
                console.log("Игрок: " + player);
            }
        )
    }
}

team.getPlayers();

//5
const counter = (function () {
    return {
        count: 0,
        increment() {
            this.count++;
            return this.count;
        },
        decrement() {
            this.count--;
            return this.count;
        },
        getValue() {
            return this.count;
        }
    }
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getValue());

//6

let item = {};

Object.defineProperty(item, 'price', {
    value: 100,
    writable: true,
    configurable: true
});

console.log(item.price);

Object.defineProperty(item, 'price', {
    writable: false,
    configurable: false
});

item.price = 200;
delete item.price;

console.log(item.price);

//7

let circle = {
    _radius: 1,

    get area() {
        return Math.PI * this._radius * this._radius;
    },

    get radius() {
        return this._radius;
    },

    set radius(value) {
        if (value > 0) {
            this._radius = value;
        }
    }
};

console.log(circle.area);
circle.radius = -3;
console.log(circle.radius);
console.log(circle.area);

//8

let car1 = {};

Object.defineProperties(car1, {
    make: { value: 'Toyota', writable: true, configurable: true, enumerable: true },
    model: { value: 'Camry', writable: true, configurable: true },
    year: { value: 2020, writable: true, configurable: true }
});
console.log("1");


for (let item in car1) {
    console.log(item);
}

console.log(car1);

Object.defineProperties(car1, {
    make: { writable: false, configurable: false },
    model: { writable: false, configurable: false },
    year: { writable: false, configurable: false }
});

car1.make = 'Honda';
delete car1.model;

console.log(car1);

//9

let numbers = [1, 2, 3];

Object.defineProperty(numbers, 'sum', {
    get() {
        return this.reduce((acc, num) => acc + num, 0);
    },
    configurable: false,
    enumerable: false
});

console.log(numbers.sum);

//10

let rectangle = {
    _width: 1,
    _height: 1,

    get width() {
        return this._width;
    },

    set width(value) {
        if (value > 0) {
            this._width = value;
        }
    },

    get height() {
        return this._height;
    },

    set height(value) {
        if (value > 0) {
            this._height = value;
        }
    },

    get area() {
        return this._width * this._height;
    }
};

console.log(rectangle.area);
rectangle.width = 5;
rectangle.height = 4;
console.log(rectangle.area);

//11

let user = {
    _firstName: 'John',
    _lastName: 'Doe',

    get firstName() {
        return this._firstName;
    },

    set firstName(value) {
        this._firstName = value;
    },

    get lastName() {
        return this._lastName;
    },

    set lastName(value) {
        this._lastName = value;
    },

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    },

    set fullName(value) {
        const parts = value.split(' ');
        if (parts.length === 2) {
            this._firstName = parts[0];
            this._lastName = parts[1];
        }
    }
};

console.log(user.fullName);
user.fullName = 'German Statko';
console.log(user.firstName);
console.log(user.lastName);