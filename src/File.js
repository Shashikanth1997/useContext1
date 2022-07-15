import React from 'react' 
import Demo from './Demo'

function File({user}) {
  return (
    <div>
        <h1>{user}</h1> 
        <Demo user = {user} />
    </div>
  )
}

export default File