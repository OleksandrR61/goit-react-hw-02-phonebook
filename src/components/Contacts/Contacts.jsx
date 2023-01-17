import { Notification } from "components/Notification/Notification"

export const Contacts = ({contacts}) => (
        contacts.length
            ?   
                <ul>
                    {contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}
                </ul>
            : <Notification message="Add your first contact please"/>
    )