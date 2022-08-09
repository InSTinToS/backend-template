import { PickType } from '@nestjs/mapped-types'
import { CreateUserInput } from 'src/graphql/graphql'
import { UserEntity } from '../entities/user.entity'

export class CreateUserDTO
  extends PickType(UserEntity, ['username', 'email', 'password'])
  implements CreateUserInput {}
