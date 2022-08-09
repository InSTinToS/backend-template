import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

import { CreateUserDTO } from './dto/create-user.dto'
import { DeleteUserDTO } from './dto/delete-user.dto'
import { ReadUserDTO } from './dto/read-user.dto'
import { UpdateUserDTO } from './dto/update-user.dto'
import { UsersService } from './users.service'

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('users')
  findAll() {
    return this.usersService.findAll()
  }

  @Query('user')
  findOne(@Args('readUserInput') readUserInput: ReadUserDTO) {
    return this.usersService.findOne(readUserInput)
  }

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserDTO) {
    return this.usersService.create(createUserInput)
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserDTO) {
    return this.usersService.update(updateUserInput)
  }

  @Mutation('deleteUser')
  remove(@Args('deleteUserInput') deleteUserInput: DeleteUserDTO) {
    return this.usersService.remove(deleteUserInput)
  }
}
