import { Component } from "react";

import styles from "./Form.module.css"

export class Form extends Component {
    state = {
        name: '',
    };

    render() {
        return (
            <form>
                <label htmlFor="name">Name</label>

                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />

                <button type="submit">Add contact</button>
            </form>
        );
    };
}