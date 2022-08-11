import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { PrismaService } from '../../shared/prisma/prisma.service'
import { CreateUserDTO } from './dto/create-user.dto'
import { DeleteUserDTO } from './dto/delete-user.dto'
import { ReadUserDTO } from './dto/read-user.dto'
import { UpdateUserDTO } from './dto/update-user.dto'

import { VerifyExistence, VerifyExistenceReturn } from './users.service.types'

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  verifyExistence: VerifyExistence = async data => {
    let by: VerifyExistenceReturn['by']
    let foundUser: VerifyExistenceReturn['foundUser']
    const keys = Object.keys(data) as VerifyExistenceReturn['by'][]

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const value = data[key]

      if (!foundUser && value) {
        foundUser = await this.prismaService.user.findUnique({
          where: { [key]: value }
        })

        by = key
      }
    }

    return { foundUser, by }
  }

  readUsers = () => this.prismaService.user.findMany()

  readUser = async ({ id, email, username }: ReadUserDTO) => {
    const { foundUser } = await this.verifyExistence({ id, email, username })

    if (!foundUser) throw new NotFoundException('User not found')

    return foundUser
  }

  createUser = async ({ email, password, username }: CreateUserDTO) => {
    const { foundUser, by } = await this.verifyExistence({ email, username })

    if (foundUser) throw new BadRequestException(`${by} already exists`)

    return this.prismaService.user.create({
      data: { email, password, username }
    })
  }

  updateUser = async (updateUserDTO: UpdateUserDTO) => {
    const id = updateUserDTO.id
    const { email, username } = updateUserDTO

    await this.readUser({ id })

    const alreadyExists = await this.verifyExistence({ email, username })

    if (alreadyExists.foundUser)
      throw new BadRequestException(`${alreadyExists.by} already exists`)

    delete updateUserDTO.id

    return this.prismaService.user.update({
      where: { id },
      data: updateUserDTO
    })
  }

  deleteUser = async ({ id }: DeleteUserDTO) => {
    const { foundUser } = await this.verifyExistence({ id })

    if (!foundUser) throw new NotFoundException('User not found')

    return this.prismaService.user.delete({ where: { id: id } })
  }
}
