import React, { useState, useEffect } from 'react';
import logo from './logo.jpg';
import './App.css';
import { Collapse, NavbarToggler, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    /*const sticky = document.querySelector('.App-nav').offsetTop;

    window.addEventListener('scroll', function handleScroll() {

        window.pageYOffset > sticky
            ? document.body.classList.add('s')
            : document.body.classList.remove('is-sticky');
    });

*/
    useEffect(() => {
        window.addEventListener("scroll", resizeHeaderOnScroll);
    });

    const resizeHeaderOnScroll = () => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 50,
        headerEl = document.getElementById("App-nav");

        if (distanceY > shrinkOn) {
            headerEl.classList.add("smaller");
        } else {
            headerEl.classList.remove("smaller");
        }
    }

    return (
        <div>
            <Navbar color="white" light expand="md" className="App-nav" id="App-nav" fixed='top'>
                <a className="nav-logo" href="#page-top">
                    <div className="nav-logo-img"><img src={logo} alt="logo" /></div>
                    <div className='logo-text'>
                        <p className='logo-text-item'>LONGBOARD</p>
                        <p className='logo-text-item'>SCHOOL</p>
                        <p className='logo-text-item'>KYIV</p>
                    </div>
                </a>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar style={{ marginRight: '5%' }}>
                    <Nav className="ml-auto nav-buttons" navbar>
                        <NavItem>
                            <NavLink href="#our-school">Наша школа</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#services">Послуги</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#team">Команда</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#photo">Фото</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
