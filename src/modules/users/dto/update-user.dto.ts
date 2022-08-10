import { PartialType, IntersectionType, PickType } from '@nestjs/mapped-types'

import { UpdateUserInput } from '../../../shared/graphql/graphql'
import { UserEntity } from '../entities/user.entity'

export class UpdateUserDTO
  extends IntersectionType(
    PickType(UserEntity, ['id']),
    PartialType(
      PickType(UserEntity, [
        'email',
        'avatar',
        'username',
        'password',
        'full_name'
      ])
    )
  )
  implements UpdateUserInput {}
