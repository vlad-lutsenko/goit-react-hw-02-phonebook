import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ contact, deleteContactbyId }) => {
  const deleteContact = () => {
    deleteContactbyId(contact.id);
  };
  return (
    <li className={styles.contactLi}>
      <p className={styles.contactLiP}>
        {contact.name}: {contact.number}
      </p>
      <button
        type="button"
        onClick={deleteContact}
        className={styles.contactLiBtn}
      >
        delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContactbyId: PropTypes.func.isRequired,
};

export default ContactListItem;
