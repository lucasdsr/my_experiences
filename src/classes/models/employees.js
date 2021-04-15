class Employee  {
    constructor (values) {
        this.age = values.age;
        this.name = values.name;
        this.photo = values.photo;
        this.occupation = values.occupation;
    }
    
    /**
     * @abstract Update user data function
     * @param {object} values object with new user value
     */
     updateEmployee(values) {
        Object.assign(this, values);
    }
}

export default Employee;