import { Heading } from '@chakra-ui/layout';
import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  console.log('render');
  return (
    <>
     <>
  <Heading color="pink.300" my="35px" fontSize="xl">UseEffect Cleanup Starter</Heading>
  </> 
      <Heading fontSize="xl">window</Heading>
      <Heading fontSize="xl">{size} PX</Heading>
    </>
  );
};

export default UseEffectCleanup;
