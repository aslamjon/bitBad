import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import SvgIcon from '../SvgIcon';
import { NavbarStyled, NavbarContainerStyled, NavbarToggleButtonStyled } from "./NavbarStyle";
import Profile from '../Profile/Profile';

import logo from '../../assets/images/logo.png';
import home from '../../assets/images/home.svg';
import shop from '../../assets/images/shop.svg';
import oqim from '../../assets/images/Oqim.svg';
import statistika from '../../assets/images/statistika.svg';
import card from '../../assets/images/card.svg';
import faq from '../../assets/images/faq.svg';


const Navbar = () => {
    return (
        <NavbarStyled>
            <NavbarToggleButtonStyled>
                <Link to="/dashboard" className="logo"><img src={logo} alt="logo" /></Link>
            </NavbarToggleButtonStyled>
            <NavbarContainerStyled>
                <Link to="/dashboard" className="logo"><img src={logo} alt="logo" /></Link>
                <ul>
                    <li>
                        <NavLink to="/dashboard">
                            <SvgIcon src={home} />
                            Asosiy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">
                            <SvgIcon src={shop} />
                            Mahsulotlar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/streams">
                            <SvgIcon src={oqim} />
                            Oqimlar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistic">
                            <SvgIcon src={statistika} />
                            Statistika
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/payment">
                            <SvgIcon src={card} />
                            To'lov
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq">
                            <SvgIcon src={faq} />
                            FAQ
                        </NavLink>
                    </li>
                </ul>
                <Profile  className="showDesktop" /> 
            </NavbarContainerStyled>
            
        </NavbarStyled>
    )
}

export default Navbar;
