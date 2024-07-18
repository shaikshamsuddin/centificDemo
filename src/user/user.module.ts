import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResolver } from 'src/–no-spec/user/user.resolver';
import { UserService } from 'src/–no-spec/user/user.service';
import config from '../config/keys';
import { User, UserSchema } from 'src/schema/user.schema';
@Module({
    imports : [
        MongooseModule.forRoot('mongodb://localhost:27017/'),
        MongooseModule.forFeature([{name: User.name, schema : UserSchema}])
    ],
})
export class UserModule {}
