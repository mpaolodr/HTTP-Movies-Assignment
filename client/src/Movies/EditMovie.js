import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const initialFormState = {
  title: "",
  director: "",
  metascore: "",
  stars: []
};

const EditMovie = props => {
  const { movie } = props;
  const history = useHistory();

  const [currentMovie, setCurrentMovie] = useState(initialFormState);

  useEffect(() => {
    if (movie) {
      setCurrentMovie({
        title: movie.title,
        director: movie.director,
        metascore: movie.metascore,
        stars: movie.stars
      });
    } else {
      history.push("/");
    }
  }, [movie]);

  return (
    <form>
      <div className="ind-field">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={currentMovie.title} />
      </div>

      <div className="ind-field">
        <label htmlFor="director">Director</label>
        <input
          type="text"
          name="director"
          id="director"
          value={currentMovie.director}
        />
      </div>

      <div className="ind-field">
        <label htmlFor="metascore">Metascore</label>
        <input
          type="number"
          name="metascore"
          id="metascore"
          value={currentMovie.metascore}
        />
      </div>

      <div className="ind-field">
        <label htmlFor="stars">Stars</label>
        <input type="text" name="stars" id="stars" value={currentMovie.stars} />
      </div>

      <button type="submit">Update</button>
    </form>
  );
};

export default EditMovie;
