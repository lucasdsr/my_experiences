class EmployeesList {
    constructor (values = {}) {
        const { list = [] } = values;
        this.list = list;
        this.length = list.length;
    }

    addEmployee(newEmployee) {
        this.list.push(newEmployee);
        this.length += 1;
    }

};

export default EmployeesList