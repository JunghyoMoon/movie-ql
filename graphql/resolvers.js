import { movies, getById, getMovies, deleteMovie } from "./db";

/*
graphql이란 무엇인가?

query(질문, operation?) 에 대한 resolve(해결)
데이터가 어떤 형태여야 하는지 schema로 정하고, resolver로 정해진 형식의 요청을 전달?

실제 데이터베이스에 접근하는 건 당연히 가능하고, api에 접근하는 것도 가능함.
*/
const resolvers = {
    Query: {
        movies: () => movies,
        movie: (_, { id }) => getById(id),
    },
};

export default resolvers;
