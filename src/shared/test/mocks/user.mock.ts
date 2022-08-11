import { CreateUserDTO } from 'src/modules/users/dto/create-user.dto'
import { UserEntity } from 'src/modules/users/entities/user.entity'
import { ObjectId } from 'mongodb'

class UserMocks {
  static getValidUser(id = 1) {
    const validUser: UserEntity = {
      avatar: 'base64Avatar',
      full_name: 'Valid FullName',
      password: 'ValidPassword@1234',
      email: `valid${id}@email.com`,
      username: `ValidUsername${id}`,
      id: new ObjectId(id).toString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    return validUser
  }

  static getValidUsers(quantity: number, fromId = 1) {
    const users: UserEntity[] = []

    for (let i = fromId; i < fromId + quantity; i++)
      users.push(this.getValidUser(i))

    return users
  }

  static getCreateUserDTO(id = 1) {
    const createUserDTO: CreateUserDTO = {
      password: 'ValidPassword@1234',
      email: `valid${id}@email.com`,
      username: `ValidUsername${id}`
    }

    return createUserDTO
  }
}

export default UserMocks
