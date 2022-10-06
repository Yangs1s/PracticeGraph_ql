const { ApolloServer, gql} = require('apollo-server')
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core')

const books = [
    {   
        id:1,
        title:"Harry Poter",
        Author:"J.K. Rowling"
    },
    {
        id:2,
        title:"Load of Rings",
        Author:"J.R.R Tolkien"
    },
    
];


const typeDefs = gql`
    type Book {
        id: Int
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
`

const resolvers = {
    Query:{
        books: () => books,
    },
}

const server = new ApolloServer({ 
    typeDefs,
    resolvers
})


server.listen().then(({ url })  =>{
    console.log(`🚀  Server ready at ${url}`)
})