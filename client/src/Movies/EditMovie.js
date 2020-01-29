import React from "react";

const EditMovie = () => {
  return (
    <form>
      <div className="ind-field">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>

      <div className="ind-field">
        <label htmlFor="director">Director</label>
        <input type="text" name="director" id="director" />
      </div>

      <div className="ind-field">
        <label htmlFor="metascore">Metascore</label>
        <input type="number" name="metascore" id="metascore" />
      </div>

      <div className="ind-field">
        <label htmlFor="stars">Stars</label>
        <input type="text" name="stars" id="stars" />
      </div>

      <button type="submit">Update</button>
    </form>
  );
};

export default EditMovie;
