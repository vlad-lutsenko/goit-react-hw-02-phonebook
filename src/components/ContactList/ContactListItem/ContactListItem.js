import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ contact, deleteContactbyId }) => {
  const deleteContact = () => {
    deleteContactbyId(contact.id);
  };
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="button" onClick={deleteContact}>
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
