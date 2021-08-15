export const movies = [
    {
        id: 1,
        title: "Lord of war",
        score: 88,
        author: "junghyoMoon",
    },
    {
        id: 2,
        title: "the Matrix",
        score: 99,
        author: "junghyoMoon",
    },
    {
        id: 3,
        title: "Inception",
        score: 100,
        author: "junghyoMoon",
    },
    {
        id: 4,
        title: "Tenet",
        score: 100,
        author: "junghyoMoon",
    },
    {
        id: 5,
        title: "Borne Identity",
        score: 97,
        author: "junghyoMoon",
    },
    {
        id: 6,
        title: "Departed",
        score: 90,
        author: "junghyoMoon",
    },
    {
        id: 7,
        title: "Heat",
        score: 98,
        author: "junghyoMoon",
    },
    {
        id: 8,
        title: "R-Point",
        score: 89,
        author: "junghyoMoon",
    },
    {
        id: 9,
        title: "We happy few",
        score: 86,
        author: "junghyoMoon",
    },
    {
        id: 10,
        title: "Fallout: New Vegas",
        score: 100,
        author: "junghyoMoon",
    },
];

export const getMovies = () => movies;

export const getById = (id) => {
    const filteredMovies = movies.filter((movie) => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter((movie) => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};
