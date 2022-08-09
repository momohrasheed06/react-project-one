import React from 'react';

function NavBar() {
  return (
    <nav className='navbar'>
        <h1>Snap</h1>
        <ul>
            <li>Features <select></select></li>
            <li>Company <select></select></li>
            <li>Careers</li>
            <li>About</li>
        </ul>
    </nav>
  )
}

export default NavBar;