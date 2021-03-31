import { Button } from '@chakra-ui/button';
import { Heading, Text } from '@chakra-ui/layout';
import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);
  useEffect(() => {
console.log('call useEffect');
if (value >= 4){
document.title=`New Messages ${value}`}
  });

  return (

  <>
    <Heading color="pink.300" mb="35px" fontSize="xl">
      useEffect Basics
    </Heading>
    <Heading fontSize="xl">{value}</Heading>
    <Button mt="30px" onClick={() => setValue(value + 1)}> click me</Button>

  </>
  )
};

export default UseEffectBasics;

