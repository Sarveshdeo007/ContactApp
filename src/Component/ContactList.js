import React from "react";
import ContactCard from "./ContactCard";
import App from "./App";
const ContactList =(props) => {
    console.log("props=>",props);
const deleteContactHandler =(id)=>{
    props.getContactsId(id);
};
//create the list
    const renderContactList =props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler ={deleteContactHandler} key={contact.id}/>;
                
    });
    //and render the list 
    return <div className="ui celled list">{renderContactList}</div>
};

export default ContactList  