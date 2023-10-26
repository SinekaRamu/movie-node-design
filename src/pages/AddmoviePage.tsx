import Layout from "../components/Layout";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../services/api";
import { useState } from "react";

const AddmoviePage = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState();

  async function add() {
    try {
      const moviePayload = {
        title: "Leo",
        year: 2023,
      };
      const res = await addMovie(moviePayload);
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
      navigate("/error");
    }
  }
  return (
    <Layout title="movieForm">
      <h1>Add Movie</h1>
      <Form type="add" />
      {/* <button onClick={() => add()} className="form-input">
        Add
      </button> */}
    </Layout>
  );
};

export default AddmoviePage;
