import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { v4 as uuidv4 } from 'uuid';
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]); //intially contacts will be empty array 

  const addContactHandler = (contact) => {
    // Generate a unique ID using uuid
    const uniqueId = uuidv4();

    // Spread the existing contacts and add the new contact with the unique ID
    setContacts([...contacts, { id: uniqueId, ...contact }]);
    console.log("contact=>", contact);
  };





  // const addContactHandler = (contact) =>{
  //   setContacts([...contacts,{id:Math.floor(Math.random()*10), ...contact}]);
  //   console.log("contact",contact);
  // };

  //test push

  const removeConactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;

    });
    setContacts(newContactList);
  };



  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  // const contacts =[
  //   {
  //     id: "1",
  //     "name": "Sarvesh",
  //     "email": "abc@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     "name": "Arun",
  //     "email": "bcd@gmail.com"
  //   },
  //   {
  //     id: "3",
  //     "name": "Himansh",
  //     "email": "cde@gmail.com"
  //   },
  //   {
  //     id: "4",
  //     "name": "Ashish",
  //     "email": "fgh@gmail.com"
  //   }  
  // ]  

  return (
    <div className="ui container">
      <Router>``
        <Header />
        <Routes>
          <Route path='/' element={ <ContactList contacts={contacts} getContactsId={removeConactHandler} />} />
          <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path='/contact/:id' element={<ContactDetail/>}/>
        </Routes>

        {/* <AddContact addContactHandler={addContactHandler}/>
  <ContactList  contacts={contacts} getContactsId={removeConactHandler}/> */}
      </Router>

    </div>
  );



}

export default App;
