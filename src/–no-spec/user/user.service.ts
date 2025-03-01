import { Injectable, Inject } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User,UserDocument } from 'src/schema/user.schema';
@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async findAll(): Promise<User[]>{
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User>{
        return this.userModel.findById(id).exec();
    }

}
