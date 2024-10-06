//1
let a = [[1, 2], [3, 4], [5, 6]];
const mas = a.reduce((acc, curr) => { return acc.concat(curr) }, []);

console.log(mas);

//2
let b = [1, [1, 2, [3, 4]], [2, 4]];
let summa = 0;
function sum(mas) {
    for (let i = 0; i < mas.length; i++) {
        if (Array.isArray(mas[i])) {
            sum(mas[i]);
        } else {
            summa += mas[i];
        }
    }
}
sum(b, 0);
console.log(summa);

//3
let studMas = [
    { name: "Ivan", age: 18, groupId: 4 },
    { name: "Lera", age: 19, groupId: 7 },
    { name: "Kolya", age: 17, groupId: 2 },
    { name: "Muhammed", age: 16, groupId: 7 },
    { name: "Nastya", age: 20, groupId: 5 },
];

function group(studMas) {
    let result = {};
    let counter = 0;
    studMas.forEach(
        student => {
            if (student.age > 17) {
                result[counter] = student;
                counter++;
            }
        }
    )

    return result;
}

studResult = group(studMas);
console.log(studResult);

//4
let str = 'ABC';
let total1 = '', total2 = '';
for (let i = 0; i < str.length; i++) {
    total1 += String(str[i].charCodeAt());
}

for (let i = 0; i < total1.length; i++) {
    if (total1[i] != '7') {
        total2 += total1[i];
    }
    else {
        total2 += '1';
    }
}
console.log(total1, " ", total2);

//5

function extend(...obj) {
    return Object.assign({}, ...obj);
}
console.log(extend({ a: 1, b: 2 }, { c: 3 }, { d: 4 }));

//6
let choice = +(prompt("Введите кол-во этажей: "));
function createPyramid(floors) {
    for (let i = 0; i < floors; i++) {
        let spaces = ' '.repeat(floors - i - 1);
        let stars = '*'.repeat(2 * i + 1);
        console.log(spaces + stars);
    }
}

createPyramid(choice);

let city = {};
city.name = "Minsk";
city.age = "600";

for (let a in city) {
    console.log(a + " ");
}