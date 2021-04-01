import { Input } from '@chakra-ui/input';
import { Heading, Text, VStack } from '@chakra-ui/layout';
import React from 'react';

export const MyHeading = ({ children }) => (
  <Heading color="pink.300" my="35px" fontSize="xl">
    {children}
  </Heading>
);
export const MyText = ({ children }) => (
  <Text fontWeight="normal" color="white" fontSize="18px">
    {children}
  </Text>
);
export const MyVStack = ({ children }) => <VStack spacing="30px">{children}</VStack>;

export const MyInput = ({ children }) => (
  <Input type="text" color="black">
    {children}
  </Input>
);
