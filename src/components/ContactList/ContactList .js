import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem/ContactListItem";

const ContactList = ({ contacts, deleteContactbyId }) => {
  return (
    <ul>
      {contacts.length ? (
        contacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            deleteContactbyId={deleteContactbyId}
          />
        ))
      ) : (
        <p>no contact with such name in your phone </p>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContactbyId: PropTypes.func.isRequired,
};

export default ContactList;
