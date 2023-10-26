import Layout from "../components/Layout";
import Form from "../components/Form";
import { useState } from "react";

const EditPage = () => {
  const [edit, setEdit] = useState(false);
  return (
    <Layout title="edit">
      <h1>Editing movie</h1>
      <Form isEdit={isEdit} />
      <button type="submit" className="form-input">
        Save
      </button>
    </Layout>
  );
};

export default EditPage;
