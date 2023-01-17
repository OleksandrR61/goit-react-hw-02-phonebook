import { ContactElement } from "components/ContactElement/ContactElement";
import { Notification } from "components/Notification/Notification";

export const Contacts = ({contacts}) => (
        contacts.length
            ?   
                <ul>
                    {contacts.map(contact => <ContactElement key={contact.id} contact={contact} />)}
                </ul>
            : <Notification message="Add your first contact please"/>
    )