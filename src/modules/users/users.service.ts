import { Injectable, NotFoundException } from '@nestjs/common'

import { PrismaService } from '../../shared/prisma/prisma.service'
import { CreateUserDTO } from './dto/create-user.dto'
import { DeleteUserDTO } from './dto/delete-user.dto'
import { ReadUserDTO } from './dto/read-user.dto'
import { UpdateUserDTO } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.user.findMany()
  }

  async findOne({ id }: ReadUserDTO) {
    const foundUser = await this.prismaService.user.findUnique({
      where: { id }
    })

    if (!foundUser) throw new NotFoundException('User not found')

    return foundUser
  }

  create(createUserInput: CreateUserDTO) {
    return this.prismaService.user.create({ data: createUserInput })
  }

  update(updateUserInput: UpdateUserDTO) {
    const id = updateUserInput.id

    delete updateUserInput.id

    return this.prismaService.user.update({
      where: { id },
      data: updateUserInput
    })
  }

  remove({ id }: DeleteUserDTO) {
    return this.prismaService.user.delete({ where: { id: id } })
  }
}
