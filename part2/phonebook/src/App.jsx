import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const trimPerson = (person) => {
    return person.toString().replace(/\s/g, "").toLowerCase();
  };
  const getId = () => {
    return Math.max(...persons.map((person) => person.id)) + 1;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
      id: getId(),
    };
    if (!persons.find((x) => trimPerson(x.name) === trimPerson(newName))) {
      setPersons(persons.concat(newPerson));
    } else {
      alert(`${newName} is already added to phonebook`);
    }
    setNewName("");
    setNewNumber("");
  };
  const getfilteredPersons = () => {
    if (!searchInput) return persons;
    return persons.filter((person) =>
      person.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  };
  const filteredPersons = getfilteredPersons();

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchInput={searchInput} setSearchInput={setSearchInput} />
      <h3>add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
}

export default App;
