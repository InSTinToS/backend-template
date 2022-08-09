import { ReadUserInput } from 'src/graphql/graphql'
import { PickType } from '@nestjs/mapped-types'
import { UserEntity } from '../entities/user.entity'

export class ReadUserDTO
  extends PickType(UserEntity, ['id'])
  implements ReadUserInput {}
