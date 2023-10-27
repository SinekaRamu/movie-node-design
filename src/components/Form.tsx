import React, { useState } from "react";
import { IMovie } from "../type";
import { Link } from "react-router-dom";

interface IForm {
  type?: string;
  getMovie?: IMovie;
  addingMovie?: (m: IMovie) => void;
}
const Form: React.FC<IForm> = ({ type, getMovie, addingMovie }) => {
  const [movie, setMovie] = useState(
    getMovie || {
      title: "",
      year: 0,
    }
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
    console.log(movie);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (addingMovie) addingMovie(movie);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-input">
        <label>
          Movie Title
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter movie name"
            onChange={(e) => handleChange(e)}
            required
          />
        </label>

        <label>
          Release Year
          <input
            type="text"
            id="year"
            name="year"
            placeholder="Enter year"
            onChange={(e) => handleChange(e)}
            required
          />
        </label>
      </div>
      {getMovie ? (
        <>
          <div className="form-input home-bar">
            <button type="submit" className="form-btn">
              Update
            </button>
            <Link to="/" role="button" className="form-btn">
              Cancel
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="form-input home-bar">
            <button type="submit" className="form-btn">
              Add
            </button>
            <Link to="/" role="button" className="form-btn">
              Back
            </Link>
          </div>
        </>
      )}
    </form>
  );
};

export default Form;
