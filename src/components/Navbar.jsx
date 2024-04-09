import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
function Navbar() {
    const [sticky, setSticky] = useState(false);
    useEffect(()=>{
        const handleScroll = () => {
            setSticky(window.scrollY> 0);
            console.log(window.scrollY);
    }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    });
    return (
        <nav className={`${sticky ? "sticky" : "" }`}>
            <div className='nav-inner'> 
                <span className='logo'>
                    ICPL
                </span>
                <div className='links'>
                    <ul>
                        <li><Link to = "/home">Home</Link> </li>
                        <li><Link to = "/about">About</Link></li>
                        <li><Link to = "/products">Products</Link> </li>
                        <li><Link to = "/gallery">Gallery</Link> </li>
                        <li><Link to = "/clients">Clients</Link> </li>
                        <li><Link to = "/contact">Contact us</Link> </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
