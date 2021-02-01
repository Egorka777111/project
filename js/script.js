"use strict";
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
    count: "numberOfFilms",
    movies: "",
    actors: "",
    genres: [],
    privat: "false"
};

const film  = prompt("Один из просмотренных фильмов");
const score = prompt("На сколько оцените его");

const movies = {
    film: film + ': '  +  score
};

console.log(movies.film);