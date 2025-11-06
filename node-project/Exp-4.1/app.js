const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const employees = [];

function showMenu() {
    console.log('\n--- Employee Management System ---');
    console.log('1. Add a new employee');
    console.log('2. List all employees');
    console.log('3. Remove an employee by ID');
    console.log('4. Exit');
    rl.question('Please enter your choice: ', (choice) => {
        handleChoice(choice);
    });
}

function handleChoice(choice) {
    if (choice === '1') {
        addEmployee();
    } else if (choice === '2') {
        listEmployees();
    } else if (choice === '3') {
        removeEmployee();
    } else if (choice === '4') {
        rl.close();
        return;
    } else {
        console.log('Invalid choice. Please try again.');
        showMenu();
    }
}

function addEmployee() {
    rl.question('Enter employee name: ', (name) => {
        rl.question('Enter employee ID: ', (id) => {
            let idExists = false;
            for (let i = 0; i < employees.length; i++) {
                if (employees[i].id === id) {
                    idExists = true;
                    break;
                }
            }
            
            if (idExists) {
                console.log('An employee with this ID already exists. Please use a unique ID.');
            } else {
                employees.push({ name: name, id: id });
                console.log(`Employee '${name}' with ID '${id}' added successfully!`);
            }
            showMenu();
        });
    });
}

function listEmployees() {
    console.log('\n--- Current Employees ---');
    if (employees.length === 0) {
        console.log('No employees found.');
    } else {
        for (let i = 0; i < employees.length; i++) {
            console.log(`Name: ${employees[i].name}, ID: ${employees[i].id}`);
        }
    }
    showMenu();
}

function removeEmployee() {
    rl.question('Enter the ID of the employee to remove: ', (id) => {
        let found = false;
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1);
                found = true;
                console.log(`Employee with ID '${id}' removed successfully.`);
                break;
            }
        }
        
        if (!found) {
            console.log(`No employee found with ID '${id}'.`);
        }
        showMenu();
    });
}

showMenu();

rl.on('close', () => {
    console.log('\nExiting application. Goodbye!');
    process.exit(0);
});