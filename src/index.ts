import express from 'express';
import graphql from 'graphql';
import { graphqlHTTP } from 'express-graphql';

const QueryRoot = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        hello: {
            type: graphql.GraphQLString,
            resolve: () => 'Hello world!'
        }
    })
});

const schema = new graphql.GraphQLSchema({ query: QueryRoot });

const app = express();

app.use('/api', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000);
