import React from 'react';
import { Container, Heading, VStack, StackDivider, HStack } from '@chakra-ui/react';

import ControlledInputsStarter from './tutorial/4-forms/setup/1-controlled-inputs';
import MultipleInputs from './tutorial/4-forms/final/2-multiple-inputs';
import MultipleInputsStarter from './tutorial/4-forms/setup/2-multiple-inputs';
import UseRefBasicsStarter from './tutorial/5-useRef/setup/1-useRef-basics';
import IndexStarter from './tutorial/6-useReducer/setup/index';
import Index from './tutorial/6-useReducer/final/index';
import PropDrillingStarter from './tutorial/7-prop-drilling/setup/1-prop-drilling';
import PropDrilling from './tutorial/7-prop-drilling/final/1-prop-drilling';
import UseRefBasics from './tutorial/5-useRef/final/1-useRef-basics';
import { MyHeading } from './MyHeading';

function App() {
  return (
    <div>
      <HStack spacing="50px" align="start" justify="space-around">
        <VStack py="100px" divider={<StackDivider borderColor="yellow.200" />}>
          <Heading className="sean">4-Forms</Heading>
          <VStack divider={<StackDivider borderColor="gray.200" />} my={10}>
            <ControlledInputsStarter />
            <MultipleInputsStarter />
          </VStack>
          <Heading className="sean">5-useRef</Heading>
          <VStack divider={<StackDivider borderColor="gray.200" />} mt={10}>
            <MyHeading>useRefBasics Setup</MyHeading>
            <UseRefBasicsStarter />
            <MyHeading>useRefBasics Final</MyHeading>
            <UseRefBasics />
          </VStack>
          <Heading className="sean">6-useReducer</Heading>
          <VStack divider={<StackDivider borderColor="gray.200" />} mt={10}>
            <MyHeading>index Setup</MyHeading>
            <IndexStarter />
            <MyHeading>index Final</MyHeading>
            <Index />
          </VStack>
          <Heading className="sean">7-prop-drilling Setup</Heading>
          <VStack divider={<StackDivider borderColor="gray.200" />} mt={10}>
            <MyHeading>Prop Drilling Setup</MyHeading>
            <PropDrillingStarter />
            <MyHeading>Prop Drilling Final</MyHeading>
            <PropDrilling />
          </VStack>
        </VStack>
      </HStack>
    </div>
  );
}

export default App;
