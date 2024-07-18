import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
 
export type DemoDocument = Demo & Document;

@ObjectType() 
@Schema()
export class Demo  {
  @Field()
  employeename: string;
 
  @Field()
  emailId: string;
 
  @Field()
  skills: string;
 
}
 
export const DemoSchema = SchemaFactory.createForClass(Demo);