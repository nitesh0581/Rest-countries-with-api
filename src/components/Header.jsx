import React from 'react';

const Header = () => {
    const changeTheme=()=>{
        const header=document.querySelector('.header');
        const details=document.querySelectorAll(".details");
        const input=document.querySelector("input");
        const select=document.querySelector("select");
        
        input.classList.toggle("light-theme");
        select.classList.toggle("light-theme");

        
        details.forEach((detail)=>{
            detail.classList.toggle("light-theme");
        })

        document.body.classList.toggle("light-theme") 
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
                     Change Theme
                </button>
                </div>
            </header>
        </>
    )
}
export default Header;