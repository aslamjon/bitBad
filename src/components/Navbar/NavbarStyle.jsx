import styled from 'styled-components'

const NavbarStyled = styled.div`
    background: #FFFFFF;
    border-radius: 15px;
    max-height: 70px;
    padding: 15px;
    .logo {
        height: 100%;
        width: 200px;
        display: flex;
        align-items: center;
        img {
            width: 100%;
            height: 100%;
        }
    }
    `;
const NavbarContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    ul {
        display: flex;
        li {
            margin: 0 14px;
            div {
                margin-right: 5px;
            }
            a {
                display: flex;
                align-items: center;
                font-weight: bold;
                font-size: 14px;
                line-height: 21px;
                letter-spacing: 0.01em;
                color: #334D6E;

                &.active {
                    color: #006400;
                }
            }
        }
    }
    @media (max-width: 991px) {
        ul {
            li {
                margin: 0 5px;
                a {
                    font-size: 13px;
                }
            }
        }
    }
    @media (max-width: 805px) {
        ul {
            li {
                a {
                    div {
                        width: 15px;
                        height: 15px;
                    }
                }
            }
        }
    }
    @media (max-width: 767px) {
        max-height: 100%;
        display: block;
        background: #fff;
        border-radius: 15px;
        z-index: 1;
        padding: 25px 15px;
        position: absolute;
        top: 0;
        left: -600px;
        transition: 0.3s;
        min-width: 50%;
        ul {
            display: block;
            li {
                margin: 10px 0;
                a {
                    font-size: 14px;
                    div {
                        width: 20px;
                        height: 20px;
                    }
                }
            }
        }
        .showDesktop {
            
        }
        
    } 
`;
const NavbarToggleButtonStyled = styled.div`
    display: none;
    @media (max-width: 767px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .dropDown {
            &__items {
                right: 20px;
                top: 95px;
            }
        }
    }
`;
export {
    NavbarStyled,
    NavbarContainerStyled,
    NavbarToggleButtonStyled
}