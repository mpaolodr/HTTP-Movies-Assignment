import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialFormState = {
  title: "",
  director: "",
  metascore: "",
  stars: ""
};

const AddMovie = () => {
  const history = useHistory();
  const [newMovie, setNewMovie] = useState(initialFormState);

  const handleChange = e => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/movies", {
        ...newMovie,
        metascore: parseInt(newMovie.metascore, 10),
        stars: newMovie.stars.split(",")
      })

      .then(res => {
        setNewMovie(initialFormState);
        history.push("/");
      })
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
          value={newMovie.title}
          onChange={handleChange}
        />
      </div>

      <div className="ind-field">
        <label htmlFor="director">Director</label>
        <input
          type="text"
          name="director"
          id="director"
          value={newMovie.director}
          onChange={handleChange}
        />
      </div>

      <div className="ind-field">
        <label htmlFor="metascore">Metascore</label>
        <input
          type="number"
          name="metascore"
          id="metascore"
          value={newMovie.metascore}
          onChange={handleChange}
        />
      </div>

      <div className="ind-field">
        <label htmlFor="stars">Stars</label>
        <input
          type="text"
          name="stars"
          id="stars"
          value={newMovie.stars}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
