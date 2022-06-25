import React from "react";
import MovieCard from "./MovieCard";

function App() {
  const title = "Mad Max";
  const posterURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];

  const newTitle = "The Wizard Of Oz";
  const newPosterURL = "https://upload.wikimedia.org/wikipedia/commons/6/69/Wizard_of_oz_movie_poster.jpg";
  const newGenresArr = ["Adventure", "Family", "Fantasy"];

  return (
    <div className="App">
      <MovieCard title={title} genres={genresArr} />
      <MovieCard title={newTitle} posterSrc={newPosterURL} genres={newGenresArr}/>
    </div>
  );
}

export default App;
