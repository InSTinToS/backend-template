import { ReadUserInput } from '../../../shared/graphql/graphql'
import { PickType, PartialType } from '@nestjs/mapped-types'
import { UserEntity } from '../entities/user.entity'

export class ReadUserDTO
  extends PickType(PartialType(UserEntity), ['id', 'username', 'email'])
  implements ReadUserInput {}
