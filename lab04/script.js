//1
let set = new Set();
let ch1;

do {
    ch1 = Number(prompt("Выберите вариант(1 - 5): ", ''));
    if (ch1 <= 4 && ch1 >= 1) {
        switch (ch1) {
            case 1:
                alert("Введите -1 чтобы остановить ввод товаров");
                while (true) {
                    let choice = prompt("Введите товар: ", '');
                    if (choice != -1) {
                        set.add(choice);
                    } else {
                        break;
                    }
                }
                break;
            case 2:
                let itemToDelete = prompt("Какой элемент удалить?", '');
                set.delete(itemToDelete);
                break;
            case 3:
                let itemToCheck = prompt("Какой элемент проверить?", '');
                if (set.has(itemToCheck)) {
                    alert("Товар есть в списке");
                } else {
                    alert("Товара нет в списке");
                }
                break;
            case 4:
                alert("Количество товара: " + set.size);
        }
    }
} while (ch1 >= 1 && ch1 <= 4);

//2
let students = new Set();

function addStudent(ID, group, FIO) {
    let student = {
        ID: ID,
        group: group,
        FIO: FIO
    }
    students.add(student);
}

function removeById(ID) {
    students.forEach((student) => {
        if (students.ID == ID) {
            students.delete(student);
        }
    }
    );
}

function filterByGroup(group) {
    return Array.from(students).filter(student => student.group === group);
}

function sortById() {
    return Array.from(students).sort((a, b) => a.studentId - b.studentId);
}

addStudent(101, 'A1', 'Ivan Ivanov');
addStudent(102, 'A2', 'Petr Petrov');
addStudent(103, 'A1', 'Sidor Sidorov');

removeById(102);

console.log('Студенты группы A1:', filterByGroup('A1'));
console.log('Студенты, отсортированные по номеру зачетки:', sortById());

//3
let products = new Map();

function addProduct(id, name, quantity, price) {
    if (products.has(id)) {
        console.log(`Товар с id ${id} уже существует.`);
    } else {
        products.set(id, { name, quantity, price });
    }
}

function removeProductById(id) {
    products.delete(id);
}

function removeProductsByName(name) {
    for (let [id, product] of products) {
        if (product.name === name) {
            products.delete(id);
        }
    }
}

function updateProductQuantity(id, newQuantity) {
    if (products.has(id)) {
        let product = products.get(id);
        product.quantity = newQuantity;
        products.set(id, product);
    } else {
        console.log(`Товар с id ${id} не найден.`);
    }
}

function updateProductPrice(id, newPrice) {
    if (products.has(id)) {
        let product = products.get(id);
        product.price = newPrice;
        products.set(id, product);
    } else {
        console.log(`Товар с id ${id} не найден.`);
    }
}

function getTotalItems() {
    return products.size;
}

function getTotalCost() {
    let totalCost = 0;
    for (let product of products.values()) {
        totalCost += product.quantity * product.price;
    }
    return totalCost;
}

addProduct(1, 'Apple', 10, 1.5);
addProduct(2, 'Banana', 5, 2);
addProduct(3, 'Orange', 8, 2.5);

console.log('Количество позиций в корзине:', getTotalItems());
console.log('Общая стоимость товаров:', getTotalCost());

updateProductQuantity(1, 15);

removeProductsByName('Banana');

console.log('Товары после изменений:', Array.from(products));
console.log('Общая стоимость товаров после изменений:', getTotalCost());

//4
let cache = new WeakMap();=

function expensiveCalculation(params) {
    if (cache.has(params)) {
        console.log('Результат взят из кэша');
        return cache.get(params);
    } else {
        let result = params.a + params.b;
        cache.set(params, result);
        console.log('Результат вычислен заново');
        return result;
    }
}

let params1 = { a: 2, b: 3 };
let params2 = { a: 5, b: 7 };

console.log('Результат для params1:', expensiveCalculation(params1));
console.log('Результат для params1:', expensiveCalculation(params1));

console.log('Результат для params2:', expensiveCalculation(params2));
console.log('Результат для params2:', expensiveCalculation(params2));
