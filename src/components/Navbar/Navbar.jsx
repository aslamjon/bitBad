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
import search from '../../assets/images/search.svg'
import avatar from '../../assets/images/avatar.jpg'
import profile from '../../assets/images/profile.svg'
import exit from '../../assets/images/exit.svg'
import Title from '../Title';

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
    .profilContainer {
        display: flex;
        align-items: center;
        input {
            background: none;
            border: none;
            outline: none;
            max-width: 60px;
        }
        .dropDown {
            &__body {
                display: flex;
                cursor: pointer;
                &__avatar {
                    width: 46px;
                    height: 46px;
                }
                &__dots {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-left: 5px;
                    div {
                        width: 4px;
                        height: 4px;
                        border-radius: 50%;
                        background: #334d6e;
                        margin: 1px 0;
                    }
                }
            }
            &__items {
                position: absolute;
                right: 0px;
                background: #fff;
                border-radius: 15px;
                top: 75px;
                z-index: 1;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                padding: 15px 12px;
                transform: translateX(400px);
                transition: 0.3s;
                ul {
                    display: block;
                    li {
                        margin: 15px 0;
                        a {
                            display: flex;
                            div {
                                color: #334D6E;
                                transition: 0.2s;
                            }
                            &:hover {
                                div {
                                    color: #006400;
                                    &:first-child {
                                        background: #006400;
                                    }
                                }
                            }
                        }
                        &:last-child {
                            margin-bottom: 0;
                        }
                        &:first-child {
                            margin-top: 0;
                        }
                    }
                }
            }
            &__items.active {
                transform: translateX(0px);
            }
        }
    }
`;

const Navbar = ({ active="" }) => {
    const [dropDown, setDropDonw] = useState(false);
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
            <div className="profilContainer">
                <SvgIcon src={search} color="#334d6e"/>
                <input type="search" placeholder="Qidiruv" />
                <div className="dropDown">
                    <div className="dropDown__body" onClick={() => setDropDonw(!dropDown)}>
                        <img className="dropDown__body__avatar" src={avatar} alt="avatar" />
                        <div className="dropDown__body__dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className={`dropDown__items ${dropDown ? 'active' : ''}`}>
                        <ul>
                            <li>
                                <Link to="">
                                    <SvgIcon src={profile} color="#334d6e"/>
                                    <Title title13>Profilim</Title>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <SvgIcon src={exit} color="#334d6e"/>
                                    <Title title13>Chiqish</Title>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </NavbarStyled>
    )
}

export default Navbar
