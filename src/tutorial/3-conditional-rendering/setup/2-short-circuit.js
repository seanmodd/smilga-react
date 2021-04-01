import { Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

import React, { useState } from 'react';
import { MyHeading, MyText, MyVStack } from '../../../MyHeading';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      {/* {if(){console.log('hello world')}} */}
      <MyHeading>Short Circuit Starter</MyHeading>

      <MyVStack>
        <MyText>{text || 'john doe'}</MyText>
        <MyVStack>
          <Button onClick={() => setIsError(!isError)}>toggle error</Button>
          {isError && <MyText>Error is true!</MyText>}
          {isError ? <MyText>Yayyyyyy Error is true!</MyText> : <MyText>NOOO Error is false!</MyText>}
        </MyVStack>
      </MyVStack>
    </>
  );
};
export default ShortCircuit;
