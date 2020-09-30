import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Button from './Button'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };
    window.addEventListener('resize',showButton)
    return (
       <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">DevcoKenya<i className="fab fa-typo3"></i></Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                           Our Blog
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Members' className='nav-links' onClick={closeMobileMenu}>
                            Members
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            SignUp
                        </Link>
                    </li>
                </ul>
               <Button> hello</Button>
            </div>
        </nav>
       </>
    )
}

export default Navbar
