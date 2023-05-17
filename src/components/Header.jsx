import React from 'react';

const Header = () => {
    const changeTheme=()=>{
        
        
        // const header=document.querySelector('.');
        
        // header.classList.toggle("light-theme");
    }
    return (
        <>
            <header className='header'>
                <div>
                    <h1>Where in the world?</h1>
                </div>
                <div>
                <button className='themeBtn' onClick={changeTheme()}>
                     Dark Theme
                </button>
                </div>
            </header>
        </>
    )
}
export default Header;