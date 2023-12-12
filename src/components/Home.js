import React from 'react'
import "./Home.css";
import Search from './Search';
function Home() {
  return (
    <div className='home'>
        
        <div className='home__body'>
            <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'/>

           <div className='home__inputContainer'>
             <Search/>
            </div>        
        </div>
    </div>
  )
}

export default Home