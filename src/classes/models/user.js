class UserModel {
    constructor (values) {
        this.age = values.age;
        this.name = values.name;
        this.photo = values.photo;
        this.career = values.career;
        this.interests = values.interests;
        this.sexualOrientation = values.sexualOrientation;
    }

    getUserData() {

        console.log(
            'getUserData',
            {
                age: this.age,
                name: this.name,
                photo: this.photo,
                career: this.career,
                interests: this.interests,
                sexualOrientation: this.sexualOrientation,
            }
        );

        return {
            age: this.age,
            name: this.name,
            photo: this.photo,
            career: this.career,
            interests: this.interests,
            sexualOrientation: this.sexualOrientation,
        }
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

}

export default UserModel;