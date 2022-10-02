import "reflect-metadata";

import { ApolloServer } from 'apollo-server';
import path from 'path';
import { buildSchema } from 'type-graphql';
import { FinanceResolver } from "./src/resolvers/FinanceResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [
      FinanceResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  const sever = new ApolloServer({
    schema,
  })

  const { url } = await sever.listen()
  
  console.log(`Server running on port ${url}`);
}

main();