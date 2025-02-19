# Movie Picker

Movie Picker is a Next.js web application that helps users discover personalized movie recommendations. Using React, Redux, and Sass, the app integrates with [The Movie Database (TMDb)](https://www.themoviedb.org/) to provide tailored movie selections based on user-defined filters.

## Live Demo
Check out the live version of Movie Picker: https://movie-picker-pbjkm.ondigitalocean.app/

## Features
- **Filter Selection**: Users can filter movies by genres, decades, country, cast and crew, and production companies.
- **Movie Picks**: The app generates a curated list of 10 movies based on selected filters.
- **Streaming Availability**: Displays where each movie can be streamed in the user's country.
- **Modern UI**: Built with Next.js, React, Redux for state management, and styled using Sass.

## Tech Stack
- **Next.js** – Server-side rendering and optimized performance.
- **React** – Component-based UI.
- **Redux** – Global state management.
- **Sass** – Modular and maintainable styling.
- **TMDb API** – Fetches movie data and streaming availability.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Grynberg34/movie-picker.git
   cd movie-picker
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env.local` file and add your TMDb API key:
   ```sh
   NEXT_PUBLIC_MOVIES_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
1. Select filters from the available options (genres, decade, country, cast and crew, companies.).
2. Click the **Pick a Movie** button to fetch movie recommendations.
3. Explore the top 10 movie picks and their streaming availability.


## License
This project is licensed under the MIT License.
