import { User as UserGQL } from 'src/graphql/graphql'
import {
  IsAlphanumeric,
  IsBase64,
  IsDateString,
  IsEmail,
  IsOptional,
  Matches
} from 'class-validator'

export class UserEntity implements UserGQL {
  @IsAlphanumeric()
  id: string

  @IsEmail({}, { message: 'Invalid E-mail!' })
  email: string

  @IsAlphanumeric('', { message: 'Username needs to be alphanumeric!' })
  username: string

  // @IsJWT
  password: string

  @IsDateString()
  updated_at: any

  @IsDateString()
  created_at: any

  @IsBase64()
  @IsOptional()
  avatar?: any

  @IsOptional()
  @Matches(/^[a-z ]+$/i, { message: 'Invalid full_name!' })
  full_name?: string
}
