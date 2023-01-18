import { Component } from "react";
import { nanoid } from 'nanoid'

import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContacList } from "components/ContacList/ContacList";

export class Phonebook extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    handleAddContacts = (newContact) => {
        let isNew = true;
        this.state.contacts.map(contact => {if (contact.name === newContact.name) {isNew = false}});
        if (isNew) {
            this.setState((prevState) => {
                return {
                    contacts: [...prevState.contacts, {
                        ...newContact,
                        id: nanoid(),
                    }],
                };
            });
        } else {
            alert(`${newContact.name} is already in contacts.`);
        };
    };

    handleSetFilter = ({target}) => {
        this.setState({
            filter: target.value,
        });
    };

    render() {
        return (
        <>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.handleAddContacts}/>

            <h2>Contacts</h2>
            <Filter onChange={this.handleSetFilter} value={this.state.filter}/>
            <ContacList contacts={this.state.contacts} filter={this.state.filter}/>
        </>
        );
    }
}