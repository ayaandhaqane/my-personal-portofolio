import React from 'react'

 function Header() {
  return (
    <div className='Header'>
      <header className='head'>
      <div className='logo'>
        <span className='Code'>Code</span>
        <span className='with'> With</span>
        <span className='me'> Me</span>
      </div>

    <nav>
         <a href="#Home">Home</a>
        <a href="#bio">BIO</a>
        <a href="#skills">Skills</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
    </nav>
    </header>
   
    </div>

    

    
  )
}

export default Header;