import { Button } from '@chakra-ui/button';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import React, { useState } from 'react';
import { MyHeading } from '../../../MyHeading';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', email: '', age: '' });
    }
  };
  return (
    <>
      <MyHeading>Multiple Inputs</MyHeading>
      <article>
        <form className="form">
          <div className="form-control">
            <label color="black" htmlFor="firstName">
              Name :{' '}
            </label>
            <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange} />
          </div>
          <div className="form-control">
            <label color="black" htmlFor="email">
              Email :{' '}
            </label>
            <input type="email" id="email" name="email" value={person.email} onChange={handleChange} />
          </div>
          <div className="form-control">
            <label color="black" htmlFor="age">
              Age :{' '}
            </label>
            <input type="text" id="age" name="age" value={person.age} onChange={handleChange} />
          </div>
          <Button onClick={handleSubmit} type="submit">
            add person
          </Button>
        </form>
        <article>
          {people.map((person) => {
            const { id, firstName, email, age } = person;
            return (
              <div key={id} className="item">
                <h4>{firstName}</h4>
                <p>{email}</p>
                <p>{age}</p>
              </div>
            );
          })}
        </article>
      </article>
    </>
  );
};

export default ControlledInputs;
