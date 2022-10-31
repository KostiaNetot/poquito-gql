const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type User {
    _id: ID
    username: String!
    age: Int!
    posts: [Post]
}
type Post {
    _id: ID
    title: String!
    content: String!
}

input UserInput {
    _id: ID
    username: String!
    age: Int!
    posts: [PostInput]
}
input PostInput {
    _id: ID
    title: String!
    content: String!
}

type Query {
    getAllUsers: [User!]
    getUser(_id: ID): User
}
type Mutation {
    createUser(user: UserInput): User
}
schema {
    query: Query
    mutation: Mutation
}
`);