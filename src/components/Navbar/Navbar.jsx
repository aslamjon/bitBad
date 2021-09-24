import React,{useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import SvgIcon from '../SvgIcon';

import logo from '../../assets/images/logo.png';
import home from '../../assets/images/home.svg';
import shop from '../../assets/images/shop.svg';
import oqim from '../../assets/images/Oqim.svg';
import statistika from '../../assets/images/statistika.svg';
import card from '../../assets/images/card.svg';
import faq from '../../assets/images/faq.svg';

import Profile from '../Profile/Profile';

const NavbarStyled = styled.div`
    background: #FFFFFF;
    border-radius: 15px;
    max-height: 70px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    
    img {
        width: 200px;
        height: 100%;
    }
    ul {
        display: flex;
        li {
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 0.01em;
            color: #334D6E;
            margin: 0 14px;
            cursor: pointer;
            div {
                margin-right: 5px;
            }
            &.active {
                color: #006400;
            }
        }
    }
    
`;

const Navbar = ({ active="" }) => {
    
    return (
        <NavbarStyled>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <ul>
                <li key={1} className={active} >
                    <SvgIcon src={home} color={active ? '#006400' : ''} />
                    Asosiy
                </li>
                <li key={2} className={active} >
                    <SvgIcon src={shop} color={active ? '#006400' : ''} />
                    Mahsulotlar
                </li>
                <li key={3} className={active} >
                    <SvgIcon src={oqim} color={active ? '#006400' : ''} />
                    Oqimlar
                </li>
                <li key={4} className={active} >
                    <SvgIcon src={statistika} color={active ? '#006400' : ''} />
                    Statistika
                </li>
                <li key={5} className={active} >
                    <SvgIcon src={card} color={active ? '#006400' : ''} />
                    To'lov
                </li>
                <li key={6} className={active} >
                    <SvgIcon src={faq} color={active ? '#006400' : ''} />
                    FAQ
                </li>
            </ul>
            <Profile />
        </NavbarStyled>
    )
}

export default Navbar
