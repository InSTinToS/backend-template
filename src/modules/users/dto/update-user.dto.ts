import { PickType } from '@nestjs/mapped-types'

import { UpdateUserInput } from 'src/graphql/graphql'
import { UserEntity } from '../entities/user.entity'

export class UpdateUserDTO
  extends PickType(UserEntity, [
    'id',
    'email',
    'avatar',
    'username',
    'password',
    'full_name'
  ])
  implements UpdateUserInput {}
