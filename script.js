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

if (personalMovieDatabase.count > 0 && personalMovieDatabase.count < 10) {
   alert('Просмотрено мало фильмов');
} else if (personalMovieDatabase.count >= 10 && personalMovieDatabase.count < 30) {
   alert('Вы классический зритель');
} else if (personalMovieDatabase.count >= 30) {
   alert('Вы киноман');
} else {
   alert('Произошла ошибка');
}

for (let i = 0; i < 2; i++) {
   let lastMovie = prompt("Один из последних просмотренных фильмов?");
   let rate = prompt("На сколько его оцените?", 0);
   console.log(rate);
   if (+lastMovie !== 0 && lastMovie.length < 50 && rate !== null && rate !== '') {
      personalMovieDatabase.movies[lastMovie] = rate;
   } else {
      console.log('error');
      i--;
   }
}

console.log(personalMovieDatabase);