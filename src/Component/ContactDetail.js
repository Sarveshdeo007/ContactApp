import React from 'react';
import user from "../images/userimg.png";
import { useLocation } from 'react-router-dom';

const ContactDetail = (props) => {
    console.log("contact details==>",  props)
    const location = useLocation();
    console.log("loactionobj==>",location)
    const { contact} = location.state || {}; // Ensure that contact is properly initialized

    if (!contact) {
        return <div>Contact details not found</div>;
    }
    const{name,email}=contact;
    return (
        <div className="main">
            <div className="ui card centerd">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>

                </div>
            </div>
        </div>
    );
};

export default ContactDetail