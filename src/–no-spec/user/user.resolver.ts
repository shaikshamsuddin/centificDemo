import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Demo } from 'src/schema/demo.schema';
import { User } from 'src/schema/user.schema';
@Resolver()
export class UserResolver {
    constructor(private readonly userService : UserService ){
    }

    @Query(()=>[User])
    async users(){
        return this.userService.findAll
    }
    @Query(() => Demo)
    async book(@Args('id', { type: () => ID }) id: string): Promise<User> {
        return this.userService.findOne(id);
    }
}
