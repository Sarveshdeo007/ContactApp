import React from "react";
import user from '../images/userimg.png';
import {Link} from "react-router-dom"


const ContactCard = (props) => {
    //to avoid writing props.Name,props.Email 
    const { id, name, email } = props.contact;
    return (    
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
            {/* //path and state as property */}
                <Link to={`/contact/${id}`} state={{ contact: props.contact }}> 
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>       
            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px" }}
                onClick={() => props.clickHandler(id)}
            >
            </i>
        </div>
    );
};

export default ContactCard;