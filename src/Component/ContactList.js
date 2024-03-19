import React from "react";
import {Link} from 'react-router-dom';   
import ContactCard from "./ContactCard";
import App from "./App";
const ContactList = (props) => {
    console.log("props=>", props);
    const deleteContactHandler = (id) => {
        props.getContactsId(id);
    };
    //create the list
    // const contacts = [
    //     {
    //         id: "1",
    //         "name": "Sarvesh",
    //         "email": "abc@gmail.com"
    //     },
    //     {
    //         id: "2",
    //         "name": "Arun",
    //         "email": "bcd@gmail.com"
    //     },
    //     {
    //         id: "3",
    //         "name": "Himansh",
    //         "email": "cde@gmail.com"
    //     },
    //     {
    //         id: "4",
    //         "name": "Ashish",
    //         "email": "fgh@gmail.com"
    //     }
    // ]




    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />;

    });
    //and render the list 
    return (
        <div class="main">
            <h2>
                Contact List
                <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
                </Link>
                </h2>
            <div className="ui celled list">{renderContactList}</div>
        </div>
        
    );
};

export default ContactList  