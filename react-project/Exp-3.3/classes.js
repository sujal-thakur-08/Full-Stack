class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

    introduce() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, grade, course) {
        super(name, age);
        this.grade = grade;
        this.course = course;
    }

    displayInfo() {
        return `${super.displayInfo()}, Grade: ${this.grade}, Course: ${this.course}`;
    }

    study() {
        return `${this.name} is studying ${this.course}.`;
    }
}

class Teacher extends Person {
    constructor(name, age, subject, department) {
        super(name, age);
        this.subject = subject;
        this.department = department;
    }

    displayInfo() {
        return `${super.displayInfo()}, Subject: ${this.subject}, Department: ${this.department}`;
    }

    teach() {
        return `${this.name} is teaching ${this.subject} in the ${this.department} department.`;
    }
}

const person1 = new Person("John Doe", 30);
const student1 = new Student("Alice Smith", 20, "A", "Computer Science");
const teacher1 = new Teacher("Dr. Brown", 45, "Mathematics", "Science");

function showPersonInfo() {
    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>Person Information:</h3>
        <p>${person1.displayInfo()}</p>
        <p>${person1.introduce()}</p>
    `;
}

function showStudentInfo() {
    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>Student Information:</h3>
        <p>${student1.displayInfo()}</p>
        <p>${student1.introduce()}</p>
        <p>${student1.study()}</p>
    `;
}

function showTeacherInfo() {
    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>Teacher Information:</h3>
        <p>${teacher1.displayInfo()}</p>
        <p>${teacher1.introduce()}</p>
        <p>${teacher1.teach()}</p>
    `;
}

function showAllInfo() {
    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>All Class Instances:</h3>
        
        <h4>Person:</h4>
        <p>${person1.displayInfo()}</p>
        <p>${person1.introduce()}</p>
        
        <h4>Student:</h4>
        <p>${student1.displayInfo()}</p>
        <p>${student1.introduce()}</p>
        <p>${student1.study()}</p>
        
        <h4>Teacher:</h4>
        <p>${teacher1.displayInfo()}</p>
        <p>${teacher1.introduce()}</p>
        <p>${teacher1.teach()}</p>
    `;
}
