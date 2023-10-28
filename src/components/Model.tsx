// import { IShowError } from "../type";

// interface IModel {
//   showModalMsg: IShowError;
//   toggleModel: () => void;
// }

const Model = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalMsg, setShowModalMsg] = useState({
    action: "success",
    msg: "done",
  });
  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };
  return (
    <dialog open>
      <article>
        <a
          href="#close"
          aria-label="Close"
          className="close"
          data-target="modal-example"
          onClick={() => toggleModel()}
        ></a>
        <h3>{showModalMsg.action}</h3>
        <p>{showModalMsg.msg}</p>
      </article>
    </dialog>
  );
};

export default Model;
