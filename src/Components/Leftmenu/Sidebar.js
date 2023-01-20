import React from 'react'

//import {FaHome} from 'react-icons/fa'
import './Sidebar.css'
function LeftSection() {
  return (
    <div className='outer'>
        <h3 className='Home'># Explore</h3>

        <h2 className='Home'>Claim Credentials</h2>
        <h2 className='Home'>Inbox</h2>
        <h2 className='Home'>Notification </h2>
        <h2 className='Profile'>Profile</h2>
        <button type='button' className='bttn'>Create PoW</button>
    </div>
  )
}

export default LeftSection