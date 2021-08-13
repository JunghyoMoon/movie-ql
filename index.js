import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

// schema란? : 데이터의 형태!
//             내가 사용자에게 보내거나, 사용자가 나에게 요청할 데이터의 형태.
const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers,
});

server.start(() => console.log("graphql server started"));
