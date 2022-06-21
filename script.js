"use strict";

let personalMovieDatabase = {
   count: 0,
   movies: {

   },
   actors: {

   },
   genres: [],
   private: false,

   startProg: function () {
      personalMovieDatabase.count = prompt("Сколько фильмов Вы посмотрели?");

      while (personalMovieDatabase.count == '' || personalMovieDatabase.count == null || isNaN(personalMovieDatabase.count)) {
         personalMovieDatabase.count = prompt("Сколько фильмов Вы посмотрели?");
      }
   },

   detectPersonalLevel: function () {
      if (personalMovieDatabase.count > 0 && personalMovieDatabase.count < 10) {
         alert('Просмотрено мало фильмов');
      } else if (personalMovieDatabase.count >= 10 && personalMovieDatabase.count < 30) {
         alert('Вы классический зритель');
      } else if (personalMovieDatabase.count >= 30) {
         alert('Вы киноман');
      } else {
         alert('Произошла ошибка');
      }
   },

   rememberMyFilms: function () {
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
   },

   showMyDB: function () {
      if (!personalMovieDatabase.private) {
         console.log(personalMovieDatabase);
      }
   },

   writeYourGenres: function () {
      for (let i = 0; i < 3; i++) {
         let answer = prompt(`Ваш любимый жанр под номером ${i + 1}`);
         if (answer === null || answer === '' || +answer == 0) {
            answer = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            i--;
         } else {
            personalMovieDatabase.genres[i] = answer;
         }
      }

      personalMovieDatabase.genres.forEach(function (genre, index) {
         console.log(`Любимый жанр номер ${index + 1} - это ${genre}`);
      });
   },

   toggleVisibleMyDB: function () {
      personalMovieDatabase.private = !personalMovieDatabase.private;
   }
};

personalMovieDatabase.writeYourGenres();