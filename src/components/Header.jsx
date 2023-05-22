import React from 'react';

const Header = () => {
    const changeTheme=()=>{
        const header=document.querySelector('.header');
        const details=document.querySelectorAll(".details");
        
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
                     Change Theme
                </button>
                </div>
            </header>
        </>
    )
}
export default Header;