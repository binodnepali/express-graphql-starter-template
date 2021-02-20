const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Mutation {
    addMutation: String
  }
  type Query {
    getQuery:String
  }
`);

module.exports = schema;
