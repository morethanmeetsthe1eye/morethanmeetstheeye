import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,

} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../App/Assets/images/iconWords.png';





const Header = () => {
    
    const [ menuOpen, setMenuOpen ] = useState(false);
    
    return (
        <Navbar dark color = 'primary' 
                sticky='top' 
                expand='md' 
                className ='custom-navbar'
                >
            <NavbarBrand classnName='ms-4' href='/'>
                <img src={logo} alt='m logo' className='float-start' />
                <h1 className='mt-1'>More Than Meets The Eye</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto'navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg'/> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                          <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg'/> About
                        </NavLink> 
                    </NavItem>
                    <NavItem>
                          <NavLink className='nav-link' to='/moreInfo'>
                            <i className='fa fa-list fa-lg'/> The Series
                         </NavLink> 
                    </NavItem> 
                     <NavItem>
                          <NavLink className='nav-link' to='/contacts'>
                            <i className='fa fa-address-card fa-lg'/> Contacts
                         </NavLink> 
                    </NavItem> 
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;

