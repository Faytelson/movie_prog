"use strict";
let numberOfFilms;
function startProg() {
   numberOfFilms = prompt("Сколько фильмов Вы посмотрели?");

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = prompt("Сколько фильмов Вы посмотрели?");
   }
}
// startProg();

let personalMovieDatabase = {
   count: +numberOfFilms,
   movies: {

   },
   actors: {

   },
   genres: [],
   private: false,
};

function detectPersonalLevel() {
   if (personalMovieDatabase.count > 0 && personalMovieDatabase.count < 10) {
      alert('Просмотрено мало фильмов');
   } else if (personalMovieDatabase.count >= 10 && personalMovieDatabase.count < 30) {
      alert('Вы классический зритель');
   } else if (personalMovieDatabase.count >= 30) {
      alert('Вы киноман');
   } else {
      alert('Произошла ошибка');
   }
}
// detectPersonalLevel();

function rememberMyFilms() {
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
}
// rememberMyFilms();

function showMyDB() {
   if (!personalMovieDatabase.private) {
      console.log(personalMovieDatabase);
   }
}
// showMyDB();

function writeYourGenres() {
   for (let i = 1; i < 4; i++) {
      personalMovieDatabase.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
   }
}
writeYourGenres();
console.log(personalMovieDatabase.genres);