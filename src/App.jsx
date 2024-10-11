import React, { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { fetchContacts } from "./redux/contactsOps";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>Phonebook</h1>
      <div className="contact-form">
        <ContactForm />
      </div>
      <div className="search-box">
        <SearchBox />
      </div>
      <div className="contact-list">
        <ContactList />
      </div>
    </div>
  );
};

export default App;
