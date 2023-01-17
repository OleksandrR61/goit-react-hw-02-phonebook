import { Component } from "react";

import { Section } from "components/Section/Section";
import { Form } from "components/Form/Form";
import { Contacts } from "components/Contacts/Contacts";

export class Phonebook extends Component {
    state = {
        contacts: [],
    };
    
    render() {
        return (
        <>
            <Section title="Phonebook">
                <Form />
            </Section>

            <Section title="Contacts">
                <Contacts />
            </Section>
        </>
        );
    }
}