import React, { useState } from 'react';
import nightMode from "../Icons/nightMode.svg";
import dayMode from '../Icons/dayMode.svg';
const Header = () => {
    const [vision,setVision]=useState(false);
    const changeTheme=()=>{
        setVision(!vision);
        const header=document.querySelector('.header');
        const details=document.querySelectorAll(".details");
        // console.log(header,"details");
        details.forEach((detail)=>{
            detail.classList.toggle("light-theme");
        })
        document.body.classList.toggle("light-theme");
        header.classList.toggle("light-theme");
    }
    return (
        <>
            <header className='header'>
                <div>
                    <h1>Where in the world?</h1>
                </div>
                <div>
                <button className='themeBtn' onClick={changeTheme}>
                     <img src={vision?nightMode:dayMode} alt="vision" style={{width:"30px", height:"30px", background:"transparent"}} /> 
                      </button>
                </div>
            </header>
        </>
    )
}
export default Header;