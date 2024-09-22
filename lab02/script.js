function basicOperation(operation, value1, value2) {
    if (operation == '+') {
        return +value1 + +value2;
    }
    if (operation == '-') {
        return +value1 - +value2;
    }
    if (operation == '/') {
        return +value1 / +value2;
    }
    if (operation == '*') {
        return +value1 * value2;
    }
}
console.log(basicOperation('+', 15, 15));
console.log(basicOperation('-', 15, 15));
console.log(basicOperation('*', 15, 15));
console.log(basicOperation('/', 15, 15));

function cubeNumbersSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i * i * i;
    }
    return sum;
}
console.log(cubeNumbersSum(20));
function avgMas(mas) {
    let sum = 0;
    for (let i = 0; i < mas.length; i++) {
        sum += mas[i];
    }
    return (sum / mas.length);
}
let mas = [1, 2, 3, 8, 9, 6, 14];
console.log(avgMas(mas));
let a = 'S';
function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90 || str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
            result += str[i];
        }
    }
    return result;
}
console.log(reverseString("JavaScr53э? ipt"));
let result = function repeatString(str, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += str + " ";
    }
    return result;
}

let result1 = result;
function repeatString(str, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += str + " ";
    }
    return result;
}

console.log(result("hello", 10));
function returnTwo(str1, str2) {
    let str3 = [];
    let counter = 0;
    let isFound = false;
    for (let i = 0; i < str1.length; i++) {
        isFound = false;
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] == str2[j]) {
                isFound = true;
            }
        }
        if (!isFound) {
            str3[counter] = str1[i];
            counter++;
        }
    }
    return str3;
}

let masRes = returnTwo(["a", "b", "c", "d", "e"], ["a", "e"]);
for (let i = 0; i < masRes.length; i++) {
    console.log(masRes[i]);
}