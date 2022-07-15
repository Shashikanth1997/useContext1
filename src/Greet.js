import React, { createContext, useState,useContext } from 'react' 
import {UserContext} from "./App.js"
function Greet() {  
    
  
  return (
    <div>
        <UserContext.Consumer>
          {(value)=><div>{value}</div>}
        </UserContext.Consumer>
    
    </div>
  )
}

export default Greet