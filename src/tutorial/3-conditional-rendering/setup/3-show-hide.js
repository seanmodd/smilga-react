import { Button } from '@chakra-ui/button';
import { Flex, Heading, VStack } from '@chakra-ui/layout';
import React, { useState, useEffect } from 'react';
import { MyHeading } from '../../../MyHeading';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <MyHeading>Show Hide Starter</MyHeading>

      <VStack spacing="50px">
        <Button my="50px" className="btn" onClick={() => setShow(!show)}>
          show/hide
        </Button>
        {show && <Item />}
      </VStack>
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <VStack spacing="20px" style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>size : {size}</h2>
    </VStack>
  );
};

export default ShowHide;
