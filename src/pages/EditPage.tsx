import Layout from "../components/Layout";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IMovie } from "../type";

const EditPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovie>();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Getting info of ", id);
    async function getMoviesFromAPI(id: number) {
      try {
        if (id) {
          const response = await getMovie(id);
          console.log(response);
          setMovie(response.data);
          console.log("data:", response.data);
          console.log(movie);
        }
      } catch (err) {
        console.log(err);
      } finally {
      }
    }
    getMoviesFromAPI(parseInt(id));
  }, [id]);

  return (
    <Layout title="edit">
      <h1>Editing movie</h1>
      <Form type="edit" />
      <button type="submit" className="form-input">
        Save
      </button>
    </Layout>
  );
};

export default EditPage;
