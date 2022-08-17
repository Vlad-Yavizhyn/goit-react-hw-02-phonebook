// const { Component } = require("react");
import { Component } from "react";
import shortid from 'shortid';

export class ContactForm extends Component {
state = {
    name: '',
    number: '',
};

handleCangeInput = ({target: {value, name}}) => {
    this.setStaye({[name]: value})
}

handelSubmit = (e) => {
    e.preventDefault();
    const contact = {
        ...this.state,
        id: shortid.generate(),
    };

    this.props.onAddContact(contact);
    this.reset();
};

reset = () => {
    this.setState({
        name: '',
        number: '',
    })
};

    render() {
       return (
       <form onSubmit={this.handelSubmit}>
        <label>
        <input
        onChange={this.handleCangeInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
        />
        </label>
        <label>
        <input
        onChange={this.handleCangeInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
        />   
        </label>
        <button>add contact</button>
       </form> 
    )}
}