import { Button } from '@chakra-ui/button';
import { Heading, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <Text>REGULAR COUNTER</Text>
        <Heading>{value}</Heading>
        <Button className='btn' onClick={() => setValue(value - 1)}>
          decrease
        </Button>
        <Button className='btn' onClick={reset}>
          reset
        </Button>
        <Button className='btn' onClick={() => setValue(value + 1)}>
          increase
        </Button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <Text>MORE COMPLEX COUNTER</Text>
        <Heading>{value}</Heading>
        <Button className='btn' onClick={complexIncrease}>
          increase later
        </Button>
      </section>
    </>
  );
};

export default UseStateCounter;
