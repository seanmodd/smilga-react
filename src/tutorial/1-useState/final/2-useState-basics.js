import React, { useState } from 'react';
import {Button, Container, Heading, VStack} from "@chakra-ui/react"

// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };

  return (
    <React.Fragment>
    <VStack >
      <Heading>{text}</Heading>
      <Button type='button' className='btn' onClick={handleClick}>
        change title
      </Button>
      
      </VStack>
    </React.Fragment>
  );
};

export default UseStateBasics;
