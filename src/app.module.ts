import { Global, Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { UsersModule } from './modules/users/users.module'
import { PrismaService } from './prisma/prisma.service'

@Global()
@Module({
  providers: [PrismaService],
  controllers: [],
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      debug: false,
      playground: false,
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
    })
  ]
})
export class AppModule {}
