// function makeCounter() {
//     let currentCount = 1;

//     return function () {
//         return currentCount++;
//     }
// }

// let counter = makeCounter();
// alert(counter());
// alert(counter());
// alert(counter());

// let counter2 = makeCounter();
// alert(counter2());

// let currentCount = 1;
// function makeCounter() {
//     return function () {
//         return currentCount++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter());
// alert(counter());

// alert(counter2());
// alert(counter2());

//1
function volume(l) {
    return (w, h) => {
        return l * w * h;
    }
}

alert(volume(10)(20, 30));
let test = volume(20);
alert(test(20, 30));
alert(test(40, 50));
//2
function* gen(startX = 0, startY = 0) {
    let x = startX;
    let y = startY;
    while (true) {
        let command = yield { x, y };
        switch (command) {
            case "right":
                x += 1;
                break;
            case "left":
                x -= 1;
                break;
            case "up":
                y += 1;
                break;
            case "down":
                y -= 1;
                break;
            default:
                console.log("Неверная команда");
        }
    }
}

let generator = gen();
generator.next();

function getDirection() {
    let dir = prompt("Введите направление: ");
    return dir;
}

while (true) {
    let dir = getDirection();
    if (dir == "exit") {
        break;
    }
    let coordinates = generator.next(dir).value;
    console.log("Текущие координаты: (" + coordinates.x + "; " + coordinates.y + ")");
}

//3
window.currentUser = {
    name: "German"
}

alert(currentUser.name);
alert(window.currentUser.name);