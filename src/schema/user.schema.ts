import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
    @Field()
    title: string;

    @Field()
    author: string;

    @Field()
    publishedDate: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);