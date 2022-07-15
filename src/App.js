import React,{useState,createContext} from 'react'
 
import Greet from './Greet'
export const UserContext =React.createContext()

const  App = () =>{ 


  return (
    <div> 
      <UserContext.Provider value = {"telugu SkillHub"}>
  
      <Greet/>
      </UserContext.Provider>
     
    </div>
  )
}

export default App;