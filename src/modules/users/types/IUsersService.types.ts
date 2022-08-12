import { CreateUserDTO } from '../dtos/create-user.dto'
import { DeleteUserDTO } from '../dtos/delete-user.dto'
import { ReadUserDTO } from '../dtos/read-user.dto'
import { UpdateUserDTO } from '../dtos/update-user.dto'
import { UserEntity } from '../entities/user.entity'
import { VerifyExistence } from './verifyExistence.types'

export interface IUsersService {
  verifyExistence: VerifyExistence
  readUsers: () => Promise<UserEntity[]>
  readUser: (dto: ReadUserDTO) => Promise<UserEntity>
  createUser: (dto: CreateUserDTO) => Promise<UserEntity>
  updateUser: (dto: UpdateUserDTO) => Promise<UserEntity>
  deleteUser: (dto: DeleteUserDTO) => Promise<UserEntity>
}
