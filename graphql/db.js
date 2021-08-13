export const people = [
    {
        id: 1,
        name: "moon",
        age: 27,
        gender: "male",
    },
    {
        id: 2,
        name: "jisu",
        age: 27,
        gender: "female",
    },
    {
        id: 3,
        name: "kwanwu",
        age: 27,
        gender: "male",
    },
    {
        id: 4,
        name: "sangjin",
        age: 18,
        gender: "male",
    },
    {
        id: 5,
        name: "eunchae",
        age: 18,
        gender: "female",
    },
];

export const getById = (id) => {
    const filteredPeople = people.filter((person) => person.id === id);
    return filteredPeople[0];
};
