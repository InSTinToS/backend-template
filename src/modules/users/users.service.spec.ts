import { Test, TestingModule } from '@nestjs/testing'
import UserMocks from '../../shared/test/mocks/user.mock'
import { PrismaService } from '../../shared/prisma/prisma.service'
import { UsersService } from './users.service'
import { NotFoundException } from '@nestjs/common'

describe('UsersService', () => {
  let service: UsersService

  const mockedPrisma = {
    user: {
      delete: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn()
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PrismaService]
    })
      .overrideProvider(PrismaService)
      .useValue(mockedPrisma)
      .compile()

    service = module.get<UsersService>(UsersService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('findAll', () => {
    const mockedUsers = UserMocks.getValidUsers(3)

    it('should be able to list all users', async () => {
      mockedPrisma.user.findMany.mockReturnValue(mockedUsers)

      const foundUsers = await service.findAll()

      expect(foundUsers).toStrictEqual(mockedUsers)
      expect(mockedPrisma.user.findMany).toHaveBeenCalledTimes(1)
    })
  })

  describe('findOne', () => {
    const mockedUser = UserMocks.getValidUser()

    it('should be able to find one user using id', async () => {
      mockedPrisma.user.findUnique.mockReturnValue(mockedUser)

      const foundUser = await service.findOne({ id: 'ex: 1' })

      expect(foundUser).toStrictEqual(mockedUser)
      expect(mockedPrisma.user.findMany).toHaveBeenCalledTimes(1)
    })

    it('should return exception when user not found', async () => {
      mockedPrisma.user.findUnique.mockReturnValue(undefined)

      expect(service.findOne({ id: 'ex: null' })).rejects.toBeInstanceOf(
        NotFoundException
      )
      expect(mockedPrisma.user.findMany).toHaveBeenCalledTimes(1)
    })
  })
})
