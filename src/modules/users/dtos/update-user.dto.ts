import { OmitType, PartialType } from '@nestjs/mapped-types'

import { UpdateUserInput } from '../../../shared/graphql'
import { UserEntity } from '../entities/user.entity'

export class UpdateUserDTO
  extends PartialType(OmitType(UserEntity, ['created_at', 'updated_at', 'id']))
  implements UpdateUserInput
{
  id: UserEntity['id']
}
