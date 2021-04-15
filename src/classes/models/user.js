class UserModel {
    constructor (values) {
        this.age = values.age;
        this.name = values.name;
        this.photo = values.photo;
        this.career = values.career;
        this.interests = values.interests;
        this.sexual_orientation = values.sexual_orientation;
    }

    /**
     * @abstract Update user data function
     * @param {object} values object with new user value
     */
    setUserData(values) {
        Object.assign(this, values);
    }

}

export default UserModel;