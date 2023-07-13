import Game from "./game.js";
import GameLibrary from "./gameLibrary.js";

const myGameLibrary = new GameLibrary();

const game1 = new Game(
  "The Witcher 3: Wild Hunt",
  "Action RPG",
  "PC, PlayStation 4, Xbox One",
  "May 19, 2015",
  "An open-world action role-playing game set in a fantasy universe."
);

const game2 = new Game(
  "The Last of Us Part II",
  "Action-Adventure",
  "PlayStation 4, PlayStation 5",
  "June 19, 2020",
  "A post-apocalyptic action-adventure game."
);

const game3 = new Game(
  "Battlefield 6",
  "Action-Adventure",
  "PlayStation 5",
  "May 23, 2021",
  "War in the battlefield"
);
// console.log(myGameLibrary);
myGameLibrary.addGame(game1);
// console.log(myGameLibrary);
myGameLibrary.addGame(game2);
// console.log(myGameLibrary);

myGameLibrary.addGame(game3);
// console.log(myGameLibrary);
myGameLibrary.displayGames();
// myGameLibrary.searchByTitle("The Witcher");

// myGameLibrary.games.forEach(function (obj) {
//   console.log(obj.title);
// });
