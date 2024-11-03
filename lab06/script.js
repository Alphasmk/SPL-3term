//1

let numbers = [10, 20, 30, 40, 50];
let [, secondNumber] = numbers;

console.log(firstNumber);

//2

let user = {
    name: 'Alice',
    age: 30
};

let admin = {
    prava: true,
    ...user
};

console.log(admin);

//3

let store = {
    state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi', likesCount: 12 },
                { id: 2, message: 'By', likesCount: 1 },
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Valera' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Viktor' },
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'hi hi' },
                { id: 3, message: 'hi hi hi' },
            ],
        },
        sidebar: []
    },
};

let { state: { profilePage: { posts }, dialogsPage: { dialogs, messages }, sidebar } } = store;

//4

let tasks = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Rest API", isDone: false },
    { id: 5, title: "GraphQL", isDone: false },
];

let task = [{ id: 6, title: "C++", isDone: true }];
let taskss = [...tasks, ...task];

console.log(taskss);

//5

let arrr = [1, 2, 3];

function sumValues(x, y, z) {
    return x + y + z;
}

console.log(sumValues(...arrr));

let a = {
    name: "german",
    age: 12,
    adress: {
        streetname: "Luchini",
        houseNum: 52
    },
    marks: [5, 7, 9]
}

let { name, age, adress: { streetname, houseNum }, marks } = dest;