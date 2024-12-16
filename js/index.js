import { Games } from "./games.js";
import { GameDeatils } from "./details.js";

const links = document.querySelectorAll(".nav-link");
const mainSection = document.querySelector(".mainSection");
const eleDisplayDetails = document.querySelector(".gameDetails");
const close = document.querySelector("i");

let gamesParameter = "mmorpg";
let insGames = new Games();
// fetch and display games
await insGames.getGames(gamesParameter);
let getGameDetails = document.querySelectorAll(".gamesCartoona > *");
/*
 * choosing the category of games to display it from nav-links
 * remove class active from all links and add it on target link
 */
links.forEach((ele) => {
  ele.addEventListener("click", function () {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
  });
  ele.addEventListener("click", async function () {
    ele.classList.add("active");
    gamesParameter = ele.dataset.category;
    await insGames.getGames(gamesParameter);
    let getGameDetails = document.querySelectorAll(".gamesCartoona > *");
    // on click on any game display its deatils after choosing the category from nav-links
    getGameDetails.forEach((ele) => {
      ele.onclick = function () {
        let id = ele.getAttribute("data-id");
        let gameDeatilsMethod = new GameDeatils();
        gameDeatilsMethod.getGameDetails(id);
      };
    });
  });
});
// on click on any game display its deatils
getGameDetails.forEach((ele) => {
  ele.onclick = function () {
    let id = ele.getAttribute("data-id");
    let gameDeatilsMethod = new GameDeatils();
    gameDeatilsMethod.getGameDetails(id);
  };
});
// close game details
close.addEventListener("click", function () {
  mainSection.classList.remove("d-none");
  eleDisplayDetails.classList.add("d-none");
});
