import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel} from '@chakra-ui/form-control';
import { Flex } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
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
<FormControl p="20px" bg="blue.100" borderRadius="2xl" boxShadow="dark-lg">
        <FormControl bg="blue.100">
          <div className='form-control'>
            <FormLabel color="black" htmlFor='firstName'>Name : </FormLabel>
            <Input
            bg="white"
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <FormLabel textColor="black" htmlFor='email'>Email : </FormLabel>
            <Input
              bg="white"
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div bg="gray.300" className='form-control'>
            <FormLabel color="black" htmlFor='age'>Age : </FormLabel>
            <Input
            bg="white"
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <Button type='submit' className='btn' bg="gray.800" onClick={handleSubmit}>
            add person
          </Button>
        </FormControl>
      </FormControl>
      <article>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
