import { PickType } from '@nestjs/mapped-types'
import { DeleteUserInput } from '../../../shared/graphql/graphql'
import { UserEntity } from '../entities/user.entity'

export class DeleteUserDTO
  extends PickType(UserEntity, ['id'])
  implements DeleteUserInput {}
