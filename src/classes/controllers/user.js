import { users } from '../../userDataSource.json'

import UserModel from '../models/user'
import UserSerializer from '../serializers/user'

function getUsers() {
    return Promise.resolve(users);
}

function mapUser(user) {
    return new UserModel(UserSerializer.serialize(user));
}

class UserController {
    static fetchUsers() {
        return getUsers().then(u => u.map(mapUser));
    }
}

export default UserController;