import { Button } from '@chakra-ui/button';
import { Heading, VStack } from '@chakra-ui/layout';
import React from 'react';
import { data } from '../../../data';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

// const removeItem = (id) => {
//   let newPeople = people.filter((person) => person.id !== id);
//   setPeople(newPeople)
// }

  return (
    <>
    <VStack>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <>
          <VStack bg={mode('grey.900', 'green.100')}  key={id} className='item'>
            <Heading textColor="green.500">{name}</Heading>
            <Button onClick={() => removeItem(id)}>remove</Button>
          </VStack>
          </>
        );
      })}
      <Button className='btn' onClick={() => setPeople([])}>
        clear items
      </Button>
      </VStack>
    </>
  );
};

export default UseStateArray;
