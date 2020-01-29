import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

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

  //   handle change
  const handleChange = e => {
    const { name, value } = e.target;
    setCurrentMovie({
      ...currentMovie,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(
    //   {
    //     ...currentMovie,
    //     stars: currentMovie.stars.split(","),
    //     id: movie.id
    //   },
    //   movie.id
    // );
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, {
        ...currentMovie,
        stars: currentMovie.stars.split(","),
        id: movie.id
      })
      .then(res => history.push("/"))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="ind-field">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={currentMovie.title}
          onChange={handleChange}
        />
      </div>

      <div className="ind-field">
        <label htmlFor="director">Director</label>
        <input
          type="text"
          name="director"
          id="director"
          value={currentMovie.director}
          onChange={handleChange}
        />
      </div>

      <div className="ind-field">
        <label htmlFor="metascore">Metascore</label>
        <input
          type="number"
          name="metascore"
          id="metascore"
          value={currentMovie.metascore}
          onChange={handleChange}
        />
      </div>

      <div className="ind-field">
        <label htmlFor="stars">Stars</label>
        <input
          type="text"
          name="stars"
          id="stars"
          value={currentMovie.stars}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Update</button>
    </form>
  );
};

export default EditMovie;
