import { Ui } from "./ui.js";
export class GameDeatils {
  constructor() {
    (this.loading = document.querySelector(".loading")),
      (this.mainSection = document.querySelector(".mainSection")),
      (this.gamesDetails = document.querySelector(".gameDetails"));
  }
  async getGameDetails(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "fdd92c707dmshb823b83e99ddf0ap16c020jsn155934212f38",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    // Showing loading until display details
    this.loading.classList.remove("d-none");
    // disappear the games to Showing Data
    this.mainSection.classList.add("d-none");
    // Fetching game details
    let response = await fetch(url, options);
    response = await response.json();
    // Display details
    let displayDetails = new Ui();
    this.gamesDetails.classList.remove("d-none");
    displayDetails.displayDetails(response);
    // disappear loading until after display games
    this.loading.classList.add("d-none");
  }
}
