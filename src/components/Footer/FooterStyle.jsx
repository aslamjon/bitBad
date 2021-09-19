import styled from 'styled-components';
export const FooterStyled = styled.div`
background: #006400;
padding: 42px 75px 35px 76px;
color: #FFFFFF;
.footer {
&__contact {
    a {
        display: flex;
        align-items: center;
        color: #FFFFFF;
        transition: 0.3s;
        div {
            background-color: #FFFFFF;
            margin-right: 5px;
            transition: 0.3s;
        }
        &:nth-child(2) {
            margin-top: 10px;
        }
        &:hover {
            color: rgba(255,255,255,0.5);
            div {
                background: rgba(255,255,255,0.5);
            }
        }
    }
}
&__social {
    display: flex;
    justify-content: flex-end;
    a {
        background: #FFFFFF;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
        transition: 0.3s;
        div {
            background: #006400;
            width: 16px;
            height: 16px;
            transition: 0.3s;
        }
        &:nth-child(3) {
            div {
                width: 20px;
                height: 20px;
            }
        }
        &:hover {
            background: rgba(255,255,255,0.3);
            div {
                background: rgba(255,255,255,1);
            }
        }
    }
}
&__copyright {
    margin-top: 35px;
    p {
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.01em;
        color: #E2DEDE;
        font-weight: normal;
        a {
            color: #FFFFFF;
            &:hover {
                color: rgba(0,0,0,0.8);
                font-weight: 600;
            }
        }
    }
}
}
    @media (max-width: 767px) {
        .footer {
            &__social, &__contact {
                justify-content: center;
                display: flex;
            }
            &__contact {
                margin-bottom: 15px;
                a:nth-child(2) {
                    margin-top: 0;
                    margin-left: 15px;
                }
            }
            &__copyright {
                flex-direction: column;
            }
        }
    }
    @media (max-width: 474px) {
        padding: 35px;
        .footer {
            &__copyright {
                text-align: center;
            }
        }
    }
    @media (max-width: 372px) {
        .footer {
            &__contact {
                flex-direction: column;
                align-items: center;
                a {
                    &:nth-child(2) {
                        margin: 0;
                    }
                    margin: 5px 0;
                }
            }
        }
    }
`;