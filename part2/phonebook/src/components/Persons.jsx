import React from "react";

function Persons(props) {
  return (
    <>
      {props.filteredPersons.map((person) => {
        return (
          <div key={person.id}>
            {person.name} {person.number}
          </div>
        );
      })}
    </>
  );
}

export default Persons;
