import React, { useState } from "react";
const Form = () => {
  const [movie, setMovie] = useState({
    title: "",
    year: 0,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
    console.log(movie);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(movie);
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
      <button type="submit" className="form-input">
        Update
      </button>
    </form>
  );
};

export default Form;
