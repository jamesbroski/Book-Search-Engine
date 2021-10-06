const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Mutation{}
    type User {}
    type Book {}
    type BookInput {}
    type Query {}
    type Auth {}
`;

module.exports = typeDefs;
