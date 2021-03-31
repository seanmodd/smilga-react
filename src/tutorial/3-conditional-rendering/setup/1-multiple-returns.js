import { Heading } from '@chakra-ui/layout';
import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  if (isLoading) {
    return <Heading>Loading...</Heading>;
  }
  return (
    <>
      <Heading color="pink.300" my="35px" fontSize="xl">
        Multiple Returns Starter
      </Heading>
    </>
  );
};

export default MultipleReturns;
