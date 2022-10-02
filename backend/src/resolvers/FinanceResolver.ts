import { Query, Resolver } from "type-graphql";

@Resolver()
export class FinanceResolver {
  @Query(() => String)
  async finances() {
    return 'Hello World';
  }
}