import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };

    // if (this.state.contacts.find(contact => data.name === contact.name)) {
    //   alert(`${data.name} is already in contacts.`);
    //   return;
    // }

    setContacts(prevState => [newContact, ...prevState]);
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const getFilteredNames = () => {
    console.log(filter);
    const normalizedFilter = filter.toLowerCase();

    console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContacts([contacts]);
  };

  const filteredNames = getFilteredNames();

  // const deleteContact = contactId => {
  //   console.log(contactId);
  //   setContacts(prevState => [
  //     prevState.filter(contact => contact.id !== contactId),
  //   ]);
  // };

  // prevState.contacts.filter(contact => contact.id !== contactId);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList data={filteredNames} onDeleteContact={deleteContact} />
    </div>
  );
}

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   formSubmitHandler = data => {
//     const newContact = {
//       ...data,
//       id: nanoid(),
//     };

//     if (this.state.contacts.find(contact => data.name === contact.name)) {
//       alert(`${data.name} is already in contacts.`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [newContact, ...prevState.contacts],
//     }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.target.value });
//   };

//   getFilteredNames = () => {
//     const normalizedFilter = this.state.filter.toLowerCase();
//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter.toLowerCase())
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const filteredNames = this.getFilteredNames();

//     return (
//       <div className="container">
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmitHandler} />
//         <h2>Contacts</h2>
//         {/* <Filter value={this.state.filter} onChange={this.changeFilter} /> */}
//         <ContactList
//           data={filteredNames}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
