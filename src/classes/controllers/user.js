import { users } from '../../userDataSource.json'

import UserModal from '../models/user'
import UserSerializer from '../serializers/user'

class UserController {
    fetchUsers() {
        return new Promise(( resolve ) => {
            console.log('fetchUsers', );
            const serializedUsers = users.map(user => new UserSerializer().serialize(user));
            const usersModal = serializedUsers.map(user => new UserModal(user));
            
            resolve(usersModal);
        });
    }
}

export default UserController;