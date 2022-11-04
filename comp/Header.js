import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    let auth=localStorage.getItem('login')
    //alert(auth)
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        {
            auth ?<><NavLink to='/Logout'>Logout</NavLink>
                <NavLink to='/AddStudents'>Add Student</NavLink>
            </>:<NavLink to='/Login'>Login</NavLink>
        }
      </nav>
    </div>
  );
}

export default Header
