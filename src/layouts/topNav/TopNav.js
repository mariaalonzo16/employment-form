import './TopNav.scss';
import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

export const TopNav = () => {
    
    return ( 
        <header>
            <Navbar
                alignLinks="right"
                brand={<a className="brand-logo" href='/'>codeHealth</a>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                className='Navbar'
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <NavItem href="../" className='navItem'>
                    Home
                </NavItem>
                <NavItem href="" className='navItem'>
                    About
                </NavItem>
                <NavItem href="../open-roles" className='navItem'>
                    Open Roles
                </NavItem>
                <NavItem href="" className='navItem'>
                    Contact Us
                </NavItem> 
            </Navbar>    
        </header>
    );
}