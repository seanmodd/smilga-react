import React from 'react'
import ErrorExample from './tutorial/1-useState/final/1-error-example'
import UseStateArray  from './tutorial/1-useState/final/3-useState-array'
import {Container, Heading, VStack} from "@chakra-ui/react"
function App() {
  return (
    <div className='container'>
          <Heading>Advanced Tutorial</Heading>
          
          <VStack mt={10} >

          
          <UseStateArray />
          </VStack>
     

    </div>
  )
}

export default App

