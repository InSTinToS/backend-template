import { UserEntity } from 'src/modules/users/entities/user.entity'

class UserMocks {
  static getValidUser(id = 1) {
    const validUser: UserEntity = {
      id: String(id),
      avatar: 'base64Avatar',
      full_name: 'Valid FullName',
      password: 'ValidPassword@1234',
      email: `valid${id}@email.com`,
      created_at: new Date().toString(),
      updated_at: new Date().toString(),
      username: `ValidUsername${id}`
    }

    return validUser
  }

  static getValidUsers(quantity: number, fromId = 1) {
    const users: UserEntity[] = []

    for (let i = fromId; i < fromId + quantity; i++)
      users.push(this.getValidUser(i))

    return users
  }
}

export default UserMocks
