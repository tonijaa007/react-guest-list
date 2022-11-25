import { useState } from 'react';

function Example() {
  // const [name, setName] = useState({
  //   firstName: '',
  //   lastName: '',
  // });

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [listOfNames, setListOfNames] = useState([]);

  function handleFirstNameChange(event) {
    console.log(event);
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  // Example of how a userobj would look like

  // const DUMMY_Example = {
  //   id: Math.random + "xyz",
  //   firstname: "Max",
  //   lastname: "Müller",
  //   attendedStatus: false,
  // };

  function onSubmit(event) {
    event.preventDefault();

    if (firstName !== '' && lastName !== '') {
      const guestData = {
        id: Math.random(),
        firstName: firstName,
        lastName: lastName,
        attendedStatus: false, // Default
      };

      setListOfNames((prevGuestData) => [...prevGuestData, guestData]);

      setFirstName('');
      setLastName('');
    }
  }

  const removeInput = () => {
    const textInput = [...firstName];
    textInput.splice(0, -1);
    setFirstName(textInput);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Guest list</h1>
      <label>
        First name
        <input
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
          placeholder="Enter First Name"
        />
      </label>
      <br />
      <label>
        Last name
        <input
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          placeholder="Enter Last Name"
          onKeyDown={(event) => {
            console.log(event);
            if (event.key === 'Enter') {
              onSubmit(event);
            }
          }}
        />
      </label>
      <br />
      <button onClick={onSubmit}>Add</button>
      <ul>
        {listOfNames.map((entry) => (
          <li key={entry.id}>
            {entry.firstName} {entry.lastName}
            <button onClick={removeInput}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Example;
