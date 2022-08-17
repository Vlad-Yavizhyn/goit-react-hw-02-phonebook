import { ContactListItem } from "./ContactListItem";

export function ContactList({contacts, handleDeleteContact}) {
    return (
    <ul>
        {contacts.map(({id, name, number}) => (
        <ContactListItem key={id} name={name} number={number} handleDeleteContact = {handleDeleteContact}/>
        ))}
    </ul>
    );
}