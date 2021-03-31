import { Button } from '@chakra-ui/button';
import { Heading } from '@chakra-ui/layout';
import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });

  // const [name,setName] = useState('peter')
  // const [age,setAge] = useState(24)
  // const [message,setMessage] = useState('random message')

  const changeMessage = () => {
    setPerson({ ...person, message: 'hello world' });
    // setMessage('hello world')
  };

  return (
    <>
      <Heading fontSize="xl">{person.name}</Heading>
      <Heading fontSize="xl">{person.age}</Heading>
      <Heading  fontSize="xl" textColor="green.500">{person.message}</Heading>
      <Button bg="blue.500" className='btn' onClick={changeMessage}>
        change message
      </Button>
    </>
  );
};

export default UseStateObject;
