"use strict";

let numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", '');

let personalMovieDatabase = {
   count: numberOfFilms,
   movies: {

   },
   actors: {

   },
   genres: [],
   private: false,
};

let lastMovie1 = prompt("Один из последних просмотренных фильмов?");
let rate1 = +prompt("На сколько его оцените?", 0);

let lastMovie2 = prompt("Еще один из последних просмотренных фильмов?");
let rate2 = +prompt("На сколько его оцените?", 0);

personalMovieDatabase.movies[lastMovie1] = rate1;
personalMovieDatabase.movies[lastMovie2] = rate2;
