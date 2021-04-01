/* eslint-disable no-console */
import { Heading, Text } from '@chakra-ui/layout';
import React, { useState, useEffect } from 'react';
import { MyHeading, MyText } from '../../../MyHeading';

const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <>
        <Heading>Loading...</Heading>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <Heading>Error...</Heading>
      </>
    );
  }
  return (
    <>
      <MyHeading>Multiple Returns Starter</MyHeading>

      <MyText>{user}</MyText>
    </>
  );
};

export default MultipleReturns;
