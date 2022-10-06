import crypto from 'crypto';
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Finance } from "../models/Finance";

@Resolver()
export class FinanceResolver {
  private data: Finance[] = [];
  
  @Query(() => [Finance])
  async finances() {
    return this.data;
  }

  @Mutation(() => Finance)
  async createFinance(@Arg('name') name: string){
    const finance = { id: crypto.randomUUID(), name, description: "Mesada", price: 50, date: "2020-11-09" }

    this.data.push(finance);

    return finance;
  }
}