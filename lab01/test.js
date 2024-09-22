//1
let s = 5;
let name = "Name";
let k = 0;
let double = 0.23;
let result = 1 / 0;
let answer = true;
let no = null;
//2
let x = 45;
let y = 21;
let xCount = Math.floor(x / 5);
let yCount = Math.floor(y / 5);
let sqCount = xCount * yCount;
alert(sqCount);
//3
let i = 2;
let a = ++i;
let b = i++;
console.log(a == b);

//4
console.log("Котик" < "котик" ? "Котик" : "котик");
console.log("Кот" < "Котик" ? "Кот" : "Котик");
console.log("Привет" > "Пока" ? "Привет" : "Пока");
console.log(73 > "53" ? 73 : "53");
console.log(false == 0 ? true : false);
console.log(54 > true ? 54 : true);
console.log(123 > false);
console.log(true < "3");
console.log(3 == "5мм");
console.log(8 > "-2");
console.log(34 == "34");
console.log(null == undefined);

//5
let FIO = prompt("Введите имя: ");
FIO = FIO.toUpperCase();
let prepName = "МАРИНА";
let words = FIO.split(' ');
let isFound = false;
for (let i = 0; i < words.length; i++) {
    if (words[i] == prepName) {
        isFound = true;
        break;
    }
}
if (isFound) {
    alert("Данные введены верно")
}
else {
    alert("Данные введены неверно")
}
//6
let exams = prompt("У студента 3 экзамена: русский, математика, английский. Какие экзамены сдал студент?");
exams = exams.toLowerCase();
let examsMas = exams.split(', ');
let examsCounter = 0;
for (let i = 0; i < exams.length; i++) {
    if (examsMas[i] == "русский" || examsMas[i] == "математика" || examsMas[i] == "английский") {
        examsCounter++;
    }
}
if (examsCounter < 1) {
    alert("Отчисление");
}
else if (examsCounter >= 1 && examsCounter < 3) {
    alert("Пересдача");
}
else {
    alert("Следующий курс");
}
//7
console.log(true + true);
console.log(0 + "5");
console.log(0 + "мм");
console.log(8 / Infinity);
console.log(9 * "\n9");
console.log("5" - 2);
console.log("5px" - 3);
console.log(true - 3);
console.log(7 || 0);
//8
for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log(i + "мм");
    }
    else {
        console.log(i + 2);
    }
}
//9
let week = [
    { id: 1, trans: "Понедельник" },
    { id: 2, trans: "Вторник" },
    { id: 3, trans: "Среда" },
    { id: 4, trans: "Четверг" },
    { id: 5, trans: "Пятница" },
    { id: 6, trans: "Суббота" },
    { id: 7, trans: "Воскресенье" }
]
let dayNumber = prompt("Введите день недели...");
alert(week[dayNumber - 1].id + " день - " + week[dayNumber - 1].trans);
//10
let trd = prompt("Введите третий параметр...");
let snd = "world";
alert(func(snd, trd));
function func(snd, trd, fst = "hello") {
    return (fst + snd + trd);
}
//11
let aSq = prompt("Введите сторону a...");
let bSq = prompt("Введите сторону b...");

function decFunc(aSq, bSq) {
    if (aSq == bSq) {
        return ((aSq + bSq) * 2);
    } else {
        return (aSq * bSq);
    }
}

console.log(decFunc(Number(aSq), Number(bSq)));

let expFunc = function (aSq, bSq) {
    if (aSq == bSq) {
        return ((aSq + bSq) * 2);
    } else {
        return (aSq * bSq);
    }
}

console.log(expFunc(+aSq, +bSq));

let strFunc = (aSq, bSq) => (aSq == bSq) ? ((aSq + bSq) * 2) : (aSq * bSq);
console.log(strFunc(+aSq, +bSq));
let l = false || "Привет";
console.log(l);