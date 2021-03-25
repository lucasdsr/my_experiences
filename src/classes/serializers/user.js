class UserSerialze {
    static serialize(data) {
        return {
            name: data.name ?? '',
            photo: data.photo ?? '',
            age: data.years_old ?? '',
            career: data.profesion ?? '',
            interests: data.interests ?? '',
            sexualOrientation: data.sexual_orientation ?? '',
        }
    }

    static deserialize(data) {
        return {
            name: data.name ?? '',
            photo: data.photo ?? '',
            years_old: data.age ?? '',
            profesion: data.career ?? '',
            interests: data.interests ?? '',
            sexual_orientation: data.sexualOrientation ?? '',
        }
    }
}

export default UserSerialze;
