import Layout from "../components/Layout";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IMovie } from "../type";
import { getMovie, updateMovie } from "../services/api";

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

  const handleUpdate = async (movie: IMovie) => {
    try {
      if (id) {
        await updateMovie(movie, parseInt(id));
      }
      navigate("/");
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  return (
    <Layout title="edit">
      <h1>Editing movie</h1>
      <Form type="edit" getMovie={movie} addingMovie={handleUpdate} />
    </Layout>
  );
};

export default EditPage;
