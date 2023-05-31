
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  
  console.log(employee);
  
  let updatedEmployee1 = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
  console.log(updatedEmployee1);
  
  let updatedEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Oak Ave");
  console.log(updatedEmployee2);
  
  let deletedEmployee1 = deleteFromEmployeeByKey(employee, "name");
  console.log(deletedEmployee1);
  
  let deletedEmployee2 = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log(deletedEmployee2);

