import React, { Component } from "react";
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm ";
import ContactList from "./ContactList/ContactList ";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  changeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  deleteContactbyId = (id) => {
    const contacts = this.state.contacts;
    const contactsWithoutDeleted = contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contacts: [...contactsWithoutDeleted],
    });
  };

  addContact = (contact) => {
    const newName = contact.name;
    const names = this.state.contacts.map((contact) =>
      contact.name.toLowerCase()
    );
    if (names.includes(newName.toLowerCase().trim())) {
      alert(`${newName} is already in contact list`);
    } else {
      this.setState((state) => ({
        contacts: [...state.contacts, contact],
      }));
    }
  };

  filterContactsByName = () => {
    const { contacts, filter } = this.state;
    if (contacts.length) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  render() {
    const contacts = this.state.contacts;
    console.log(contacts);
    return (
      <>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 1 && <Filter onChange={this.changeHandler} />}
          <ContactList
            contacts={this.filterContactsByName()}
            deleteContactbyId={this.deleteContactbyId}
          />
        </Section>
      </>
    );
  }
}

export default App;
