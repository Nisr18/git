import React from 'react'
import {useNavigate} from 'react-router-dom'
function Order() {
  const navigate=useNavigate()
  return (
    
    <div>Order confirmed..!
      <button onClick={()=>navigate(-1)}>Back</button>
    </div>
  )
}

export default Order