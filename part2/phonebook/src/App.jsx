import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
    });
  }, []);

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
