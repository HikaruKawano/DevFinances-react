import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Finance {
 @Field(__type => ID)
  id:string;

  @Field()
  name: string;

  @Field()
  description:string;

  @Field()
  price: number;

  @Field()
  date: String;
}