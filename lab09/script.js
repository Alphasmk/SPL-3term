//1
let Shape = (type) => {
    return {
        type: type
    };
};

let ColoredShape = (type, color) => {
    let shape = Shape(type);
    return {
        ...shape,
        color: color
    };
};

let LinedShape = (type, lines) => {
    let shape = Shape(type);
    return {
        ...shape,
        lines: lines
    };
};

const yellowSquare = ColoredShape('square', 'yellow');
const greenCircle = ColoredShape('circle', 'green');
const triangleWithLines = LinedShape('triangle', 3);

function getGreenCircleProperties() {
    return Object.keys(greenCircle);
}

function getTriangleWithLinesProperties() {
    return Object.keys(triangleWithLines);
}

function hasSquareOwnColorProperty() {
    return yellowSquare.hasOwnProperty('color');
}

console.log("Свойства зеленого круга:", getGreenCircleProperties());
console.log("Свойства треугольника с тремя линиями:", getTriangleWithLinesProperties());
console.log("Есть ли у маленького квадрата собственное свойство цвета:", hasSquareOwnColorProperty());


//2
class Human {
    constructor(name, surname, yearOfBirth, address) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.address = address;
        this.year = 2024;
    }

    get age() {
        return this.year - this.yearOfBirth;
    }

    set age(newAge) {
        this.yearOfBirth = this.year - newAge;
    }

    updateAddress(newAddress) {
        this.address = newAddress;
    }
}

class Student extends Human {
    constructor(name, surname, yearOfBirth, address, faculty, course, group, studentId) {
        super(name, surname, yearOfBirth, address);
        this.faculty = faculty;
        this.course = course;
        this.group = group;
        this.studentId = studentId;
    }

    updateCourse(newCourse) {
        this.course = newCourse;
    }

    updateGroup(newGroup) {
        this.group = newGroup;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Faculty {
    constructor(name, groupCount, studentCount, students = []) {
        this.name = name;
        this.groupCount = groupCount;
        this.studentCount = studentCount;
        this.students = students;
    }

    updateGroupCount(newCount) {
        this.groupCount = newCount;
    }

    updateStudentCount(newCount) {
        this.studentCount = newCount;
    }

    getDev() {
        return this.students.filter(student => {
            const specialtyCode = student.studentId[1];
            return specialtyCode === '4';
        }).length;
    }

    getGroupe(groupName) {
        return this.students.filter(student => student.group === groupName);
    }
}

const student1 = new Student('Иван', 'Иванов', 2002, 'Минск', 'ФИТ', 2, 'ФИТ-2', '741202001');
const student2 = new Student('Анна', 'Петрова', 2003, 'Гродно', 'ФИТ', 3, 'ФИТ-3', '742202003');
const student3 = new Student('Олег', 'Сидоров', 2001, 'Брест', 'ФИТ', 4, 'ФИТ-3', '743202002');

const fitFaculty = new Faculty('ФИТ', 5, 3, [student1, student2, student3]);

console.log('Возраст Анны:', student2.age);
student2.age = 21;
console.log('Обновленный год рождения Анны:', student2.yearOfBirth);

console.log('Полное имя Ивана:', student1.getFullName());
console.log('Количество студентов специальности ПИ:', fitFaculty.getDev());
console.log('Список студентов группы ФИТ-3:', fitFaculty.getGroupe('ФИТ-3'));