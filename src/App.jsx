import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
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
