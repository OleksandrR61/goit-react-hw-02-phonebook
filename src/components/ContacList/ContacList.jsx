import PropTypes from 'prop-types';

import { ContactElement } from "components/ContactElement/ContactElement";
import { Notification } from "components/Notification/Notification";

export const ContacList = ({contacts, filter}) => {
    const contactsForRender = filter
        ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        : contacts;
    let message = '';

    if (!contactsForRender.length && !filter) {
        message="Add your first contact please.";
    } else if (!contactsForRender.length && filter) {
        message="No contacts found for your request.";
    }

    return (
        contactsForRender.length
            ?    
                <>
                    <ul>
                        {contactsForRender.map(contact =>
                            <ContactElement key={contact.id} contact={contact} />
                        )}
                    </ul>
                </>
            : <Notification message={message}/>
    )
};

Notification.propTypes = {
    filter: PropTypes.string.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })).isRequired
}