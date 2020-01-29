import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import EditMovie from "./Movies/EditMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movie, setMovie] = useState();

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const movieToEdit = movie => {
    setMovie(movie);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return (
            <Movie
              {...props}
              addToSavedList={addToSavedList}
              movieToEdit={movieToEdit}
            />
          );
        }}
      />

      <Route path="/update-movie/:id">
        <EditMovie movie={movie} />
      </Route>
    </>
  );
};

export default App;
