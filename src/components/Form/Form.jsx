import { Component } from "react";

import styles from "./Form.module.css"

export class Form extends Component {
    state = {
        name: '',
    };

    render() {
        return (
            <form className={styles.form} onSubmit={this.props.onSubmit}>
                <label htmlFor="name" className={styles.label}>Name</label>

                <input
                    type="text"
                    id="name"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    className={styles.input}
                />

                <button type="submit" className={styles.button}>Add contact</button>
            </form>
        );
    };
}