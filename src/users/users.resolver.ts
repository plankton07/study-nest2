import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
    @Query((type) => String)
    helloWorld(): string {
        return 'Hello World!';
    }
}
