

const { ApolloServer, gql } = require('apollo-server')
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core')


// Schema definition
const typeDefs = gql`

  `;

// Resolver map
const resolvers = {
   
};

const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen().then(( url:String ) => {
    console.log(`🚀  Server ready at ${url}`)
})