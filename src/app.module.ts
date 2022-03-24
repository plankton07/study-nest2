import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            driver: ApolloDriver,
        }),
        UsersModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
