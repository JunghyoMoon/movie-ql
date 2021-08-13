import { people } from "./db";

const Moon = {
    name: "junghyo",
    age: 27,
    gender: "male",
};

const resolvers = {
    Query: {
        people: () => people,
        person: () => Moon,
    },
};

export default resolvers;
