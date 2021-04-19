const storage = {

    setEmployeesList(employeesList) { 
        localStorage.setItem('employeesList', JSON.stringify(employeesList));
    },

    getEmployeesList() {
        return JSON.parse(localStorage.getItem('employeesList')) ?? [];
    }

}

export default storage;