const employee = {
    name: "Sam",
    streetAddress:"11 Broadway",
};

// update employee
function updateEmployeeWithKeyAndValue(employee,key,value) {
    const newEmployee = {...employee};
    newEmployee[key] = "11 Broadway";

    return newEmployee;
};


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = "12 Broadway"

    return employee;
};


function deleteFromEmployeeByKey(employee, value, key){
    const newEmployee = {newEmployee}
    return newEmployee
};
 
// destructively delete
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee
};

