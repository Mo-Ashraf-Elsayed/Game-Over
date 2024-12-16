import { Ui } from "./ui.js";

export class Games {
  constructor() {
    (this.loading = document.querySelector(".loading")),
      (this.mainSection = document.querySelector(".mainSection"));
  }
  async getGames(category = "mmorpg") {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "fdd92c707dmshb823b83e99ddf0ap16c020jsn155934212f38",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    // Showing loading until display games
    this.loading.classList.remove("d-none");
    this.mainSection.classList.remove("d-none");
    // Fetching games
    let response = await fetch(url, options);
    response = await response.json();
    // Display games
    let displayGames = new Ui();
    displayGames.displayData(response);
    // disappear loading until after display games
    this.loading.classList.add("d-none");
  }
}
