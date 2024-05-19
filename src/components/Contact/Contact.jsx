import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";

import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteNumber } from "../../redux/contactsSlice";

const Contact = ({ dataContact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteNumber(id));

  return (
    <>
      <div className={css.info}>
        <div className={css.name}>
          <BsFillPersonFill />
          <p>{name}</p>
        </div>
        <div className={css.name}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </>
  );
};
export default Contact;
