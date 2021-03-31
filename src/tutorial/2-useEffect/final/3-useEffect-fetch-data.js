import { Button } from '@chakra-ui/button';
import { Box, Heading } from '@chakra-ui/layout';
import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
 
  <Heading color="pink.300" my="35px" fontSize="xl">Fetch Data</Heading>
  <>
  </> 
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <Box as="button">
                <Heading fontSize="xl" textColor="blue.500">{login}</Heading>
                <a href={html_url}>profile</a>
              </Box>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
