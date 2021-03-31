import { Button } from '@chakra-ui/button';
import { Heading } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
 <>
  <Heading color="pink.300" my="35px" fontSize="xl">Multiple Inputs</Heading>
  </> 
      <FormControl borderRadius="2xl" boxShadow="dark-lg" bg="blue.100">
        <FormControl borderRadius="2xl" bg="blue.100" className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <FormLabel color="black" htmlFor='firstName'>Name : </FormLabel>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <FormLabel color="black" htmlFor='email'>Email : </FormLabel>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type='submit'>add person</Button>
        </FormControl>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </FormControl>
    </>
  );
};

export default ControlledInputs;
