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
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    PropTypes.array,
  ]),
  deleteContactbyId: PropTypes.func.isRequired,
};
export default ContactList;
