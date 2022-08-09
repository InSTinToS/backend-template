import { Injectable } from '@nestjs/common'

import { PrismaService } from 'src/prisma/prisma.service'
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

  findOne({ id }: ReadUserDTO) {
    return this.prismaService.user.findUnique({ where: { id } })
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
