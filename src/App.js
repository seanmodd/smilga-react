import React from 'react';
import { Container, Heading, VStack, StackDivider, HStack } from '@chakra-ui/react';
import UseStateObject from './tutorial/1-useState/final/4-useState-object';
import UseStateCounter from './tutorial/1-useState/final/5-useState-counter';
import UseEffectBasics from './tutorial/2-useEffect/final/1-useEffect-basics';
import UseEffectBasicsStarter from './tutorial/2-useEffect/setup/1-useEffect-basics';
import UseEffectCleanup from './tutorial/2-useEffect/final/2-useEffect-cleanup';
import UseEffectCleanupStarter from './tutorial/2-useEffect/setup/2-useEffect-cleanup';
import UseEffectFetchData from './tutorial/2-useEffect/final/3-useEffect-fetch-data';
import UseEffectFetchDataStarter from './tutorial/2-useEffect/setup/3-useEffect-fetch-data';
import MultipleReturns from './tutorial/3-conditional-rendering/final/1-multiple-returns';
import MultipleReturnsStarter from './tutorial/3-conditional-rendering/setup/1-multiple-returns';
import ShortCircuit from './tutorial/3-conditional-rendering/final/2-short-circuit';
import ShortCircuitStarter from './tutorial/3-conditional-rendering/setup/2-short-circuit';
import ShowHide from './tutorial/3-conditional-rendering/final/3-show-hide';
import ShowHideStarter from './tutorial/3-conditional-rendering/setup/3-show-hide';
import ControlledInputs from './tutorial/4-forms/final/1-controlled-inputs';
import ControlledInputsStarter from './tutorial/4-forms/setup/1-controlled-inputs';
import MultipleInputs from './tutorial/4-forms/final/2-multiple-inputs';
import MultipleInputsStarter from './tutorial/4-forms/setup/2-multiple-inputs';
import UseRefBasicsStarter from './tutorial/5-useRef/setup/1-useRef-basics';

function App() {
        return (
                <div>
                        <HStack spacing="50px" align="start" justify="space-around">
                                <VStack py="100px" divider={<StackDivider borderColor="yellow.200" />}>
                                        <Heading>2-UseEffect Final</Heading>
                                        <VStack divider={<StackDivider borderColor="gray.200" />} mt={10}>
                                                <UseEffectBasics />
                                                <UseEffectCleanup />
                                                <UseEffectFetchData />
                                        </VStack>

                                        <Heading>3-Conditional Rendering</Heading>
                                        <VStack
                                                divider={<StackDivider borderColor="gray.200" />}
                                                spacing="30px"
                                                mt={10}
                                        >
                                                <Heading fontSize="xl">Multiple Returns</Heading>
                                                <MultipleReturns />
                                                <Heading fontSize="xl">ShortCircuit</Heading>
                                                <ShortCircuit />
                                                <Heading fontSize="xl">ShowHide</Heading>
                                                <ShowHide />
                                        </VStack>

                                        <Heading>4-Forms</Heading>
                                        <VStack
                                                divider={<StackDivider borderColor="gray.200" />}
                                                spacing="30px"
                                                mt={10}
                                        >
                                                <Heading fontSize="xl">Controlled Inputs</Heading>
                                                <ControlledInputs />
                                                <Heading fontSize="xl">Multiple Inputs</Heading>
                                                <MultipleInputs />
                                        </VStack>
                                </VStack>
                                //! Now starts our attempt
                                <VStack py="100px" divider={<StackDivider borderColor="yellow.200" />}>
                                        <Heading>2-UseEffect Starters</Heading>
                                        <VStack divider={<StackDivider borderColor="gray.200" />} mt={10}>
                                                <UseEffectBasicsStarter />
                                                <UseEffectCleanupStarter />
                                                <UseEffectFetchDataStarter />
                                        </VStack>
                                        <Heading>3-Conditional Rendering Starters</Heading>
                                        <VStack divider={<StackDivider borderColor="gray.200" />} mt={10}>
                                                <MultipleReturnsStarter />
                                                <ShortCircuitStarter />
                                                <ShowHideStarter />
                                        </VStack>
                                        <Heading>4-Forms</Heading>
                                        <VStack divider={<StackDivider borderColor="gray.200" />} my={10}>
                                                <ControlledInputsStarter />
                                                <MultipleInputsStarter />
                                        </VStack>
                                        <Heading>5-useRef</Heading>
                                        <VStack divider={<StackDivider borderColor="gray.200" />} mt={10}>
                                                <UseRefBasicsStarter />
                                        </VStack>
                                </VStack>
                        </HStack>
                </div>
        );
}

export default App;
