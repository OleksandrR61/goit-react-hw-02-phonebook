import { Component } from "react";
import { nanoid } from 'nanoid'

import { Section } from "components/Section/Section";
import { Form } from "components/Form/Form";
import { Contacts } from "components/Contacts/Contacts";

export class Phonebook extends Component {
    state = {
        contacts: [],
    };

    handleAddContacts = (newContact) => {
        this.setState((prevState) => {
            return {
                contacts: [...prevState.contacts, {
                    ...newContact,
                    id: nanoid(),
                }],
            };
        });
    };

    render() {
        return (
        <>
            <Section title="Phonebook">
                <Form onSubmit={this.handleAddContacts}/>
            </Section>

            <Section title="Contacts">
                <Contacts contacts={this.state.contacts}/>
            </Section>
        </>
        );
    }
}