import React from 'react'

function Banner() {
  return (
    <div className='banner'>
    <div className="profile-section">
      <img className='profile-pic ' src="imge.png"  alt="" />
        <div className="badge badge-webflow">Webflow Developer</div>
        <div className="badge badge-design">Web Designer</div>
      </div>
       <h1>Hi, <span className='ayaan'>  I'm Ayaan,</span><br/>A Web Developer</h1>
       <p>Transforming Your Digital Vision into Reality: Innovative Web Designs by a Professional Web Developer!</p>
    </div>
  )
}

export default Banner
