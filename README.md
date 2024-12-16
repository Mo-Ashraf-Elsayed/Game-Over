# Game Over Website

## Project Overview

**Game Over** is a dynamic website that displays various games, allowing users to view a list of games categorized by their genre and click on individual game cards to see detailed information about the game he click on it. The website is built using HTML, CSS, Bootstrap, and JavaScript. It incorporates modern web development practices such as Object-Oriented Programming (OOP) and modularity in JavaScript To divide the project, separate the classes from each other, export them, and import them for use it in other JavaScript pages in the project.

The website is structured as a single-page application, where content is dynamically loaded via API requests and displayed using spinning loaders to indicate data fetching.

## Features

- **Loading Spinner:** 
  - A spinner is shown while the website fetches game data and disappears when the data is loaded.
  
- **Games Section:** 
  - Displays a collection of games categorized by genre. Each game is shown in a card.

- **Game Details:** 
  - Clicking on a game card displays its detailed information, such as Title, Category,, platform, Status,  description and Button to take the user to the game. This section also has a spinner while the details are being fetched.

- **Category Filter: (nav)** 
  - The navbar contains links to different game categories ( MMORPG, SHOOTER, SAILING, etc.). Clicking on any of these links triggers a data fetch for the specific category based on a custom attribute in the link.

- **Modularity in  JavaScript:** 
  - The project follows Object-Oriented Programming (OOP) principles and is broken into four JavaScript files for modularity and ease of maintenance.

## Project Structure

The project follows a simple structure:


## HTML Structure

### 1. **Background Image (bg-photo)**

The first section of the page contains a background image that serves as a visual introduction to the website.

### 2. **Navbar**

The navbar includes six links that allow users to filter games by categories. Each link has a custom attribute `data-category` that determines the category of games to display when clicked.

### 3. **Main Section (Games Section)**

The main section (`mainSection`) contains cards for each game. Each card includes:
A custom attribute `data-id` representing the game's unique ID And we use this ID to fetch the detail of the game when the user click on any card.

### 4. **Game Details Section**

This section appears when a game card is clicked, displaying detailed information about the selected game. The `gameDetails` section will be fetched using the game's unique ID (`data-id` attribute).

### 5. **Loading Spinner:** 
 A spinner is shown while the website fetches game data and disappears when the data is loaded.

## JavaScript Overview

### 1. **ui.js**

The `Ui` class is responsible for rendering the fetched data to the HTML page. It contains methods to:
  - Display games in the main section.
  - Display detailed information of a selected game.


### 2. **games.js**

The `Games` class contains a method to fetch and display the list of games based on the selected category. The class makes an API request, retrieves the data, and uses the `Ui` class to render the results.

### 3. **details.js**

The `GameDetails` class is responsible for fetching detailed information about a specific game based on its ID. The details include the game's title, description,  platforms, and other relevant information and uses the `Ui` class to render the results.

### 4. **index.js**

The `index.js` file imports the necessary classes from `games.js` and `details.js` and uses them to fetch and display game data. It:
  - Listens for navbar link clicks to fetch games based on the selected category.
  - Handles game card clicks to fetch and display detailed game information.

## Usage

### 1. **Viewing Games by Category:**

- When you click on any link in the navbar, the website will fetch games from the API for the selected category. The category is passed as a query parameter (`category`) from the custom `data-category` attribute in the clicked link.
  
### 2. **Displaying Game Details:**

- Clicking on any game card will trigger an API request to fetch detailed information about the selected game using its `data-id` attribute which in the parent element of game card.
- A loading spinner will appear while the details are being fetched. Once the data is retrieved, the game details are displayed.
- There is a **Close** button in the details section that allows you to return to the games list by hiding the details and displaying the main section again.

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling for the webpage, including custom styles and layout.
- **Bootstrap**: For responsive design and quick styling of components.
- **JavaScript (ES6)**: To manage the functionality of the page, including fetching and displaying data dynamically using Object-Oriented Programming.
- **API**: External API used for fetching game data.

## API Endpoints

The website uses an API to fetch game data. The query parameters for category and game ID are as follows:

- **Games by Category:**
  - URL: `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`
  - Parameter: `category` (Example: `mmorpg`, `shooter`, `sailing`)

- **Game Details:**
  - URL: `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`
  - Parameter: `id` (Unique identifier of the game)

### [LinkedIn](https://www.linkedin.com/in/mohammed-ashraf0/)
### [Live Demo](https://mo-ashraf-elsayed.github.io/Game-Over/)
