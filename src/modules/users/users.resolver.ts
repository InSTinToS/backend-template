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
    return this.usersService.readUsers()
  }

  @Query('user')
  findOne(@Args('readUserInput') readUserDTO: ReadUserDTO) {
    return this.usersService.readUser(readUserDTO)
  }

  @Mutation('createUser')
  create(@Args('createUserInput') createUserDTO: CreateUserDTO) {
    return this.usersService.createUser(createUserDTO)
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserDTO: UpdateUserDTO) {
    return this.usersService.updateUser(updateUserDTO)
  }

  @Mutation('deleteUser')
  remove(@Args('deleteUserInput') deleteUserDTO: DeleteUserDTO) {
    return this.usersService.deleteUser(deleteUserDTO)
  }
}
