import React from 'react'
import UseStateObject  from '../src/tutorial/1-useState/final/4-useState-object'
import UseStateCounter  from '../src/tutorial/1-useState/final/5-useState-counter'
import {Container, Heading, VStack} from "@chakra-ui/react"
function NewApp() {
  return (
    <div className='container'>
          <Heading>1-UseState</Heading>
          
          <VStack mt={10} > 
          <UseStateObject />
          <Heading>HERE</Heading>
          <UseStateCounter />
          </VStack>
     

    </div>
  )
}

export default NewApp

