import React from 'react'
import Greet from './Greet';
const Demo = ({user}) =>{
    return(
        <div>
            <h1>{user}</h1> 
            <Greet user = {user}/>
        </div>
    )
} 
export default Demo;