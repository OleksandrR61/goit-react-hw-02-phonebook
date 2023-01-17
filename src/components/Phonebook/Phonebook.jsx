import { Component } from "react";
import { nanoid } from 'nanoid'

import { Section } from "components/Section/Section";
import { Form } from "components/Form/Form";
import { Contacts } from "components/Contacts/Contacts";

export class Phonebook extends Component {
    state = {
        contacts: [],
    };

    handleAddContacts = (event) => {
        event.preventDefault();

        console.log(event.target.name.value);

        this.setState((prevState) => {
            return {
                contacts: prevState.contacts.push({
                    name: event.target.name.value,
                    id: nanoid(),
                })
            };
        });
    };

    render() {
        console.log(this.state);
        return (
        <>
            <Section title="Phonebook">
                <Form onSubmit={this.handleAddContacts}/>
            </Section>

            <Section title="Contacts">
                <Contacts />
            </Section>
        </>
        );
    }
}