import React from 'react'
import styled from 'styled-components';

import { Row, Container, Col } from '../components/Grid';
import bannerImg from '../assets/images/banner.png';
import logo from '../assets/images/logo.png'
import Text from '../components/Text';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

import delivery from '../assets/images/delivery.svg';
import stopwatch from '../assets/images/stopwatch.svg';
import ticket from '../assets/images/ticket-percent-outline.svg';
import { LandingCard } from '../components/Card';


const StyledLandingPage = styled.div`
.main {
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${bannerImg});
    &__content {
        width: 40%;
        margin: 0 auto;
        text-align: center;
        img {
            width: 114%;
        }
    }
    &__link{
        margin: 43px 19px 0 19px;
        button {
            transition: 0.3s;
            &:hover {
                box-shadow: 0px 0px 4px 5px rgba(0, 100, 0, 0.25);
            }
        }
    }
}
.section {
    margin-top: 100px;
    margin-bottom: 130px;
    &__cards {
        margin-top: 110px;
    }
    &__title {
        margin-top: 200px;
        margin-bottom: 100px;
    }
    &__numberAbout {
        text-align: center;
        font-weight: bold;
        h1 {
            font-size: 80px;
            line-height: 120px;
            letter-spacing: -0.07em;
        }
        p {
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.01em;
        }
    }
}
    @media (max-width: 991px) {
        .main {
            &__content {
                width: 60%;
            }
        }
    }
    @media (max-width: 733px) {
        .section {
            &__title {
                font-size: 40px;
                line-height: 50px;
            }
        }
    }
    @media (max-width: 619px) {
        .section {
            padding: 0 50px;
        }
    }
    @media (max-width: 588px) {
        .main {
            &__content {
                width: 70%;
            }
        }
        .section {
            &__title {
                font-size: 30px;
                line-height: 40px;
            }
        }
    }
    @media (max-width: 450px) {
        .main {
            &__content {
                width: 85%;
            }
        }
        .section {
            &__numberAbout {
                h1 {
                    font-size: 65px;
                }
            }
        }
    }
    @media (max-width: 358px) {
        .section {
            &__numberAbout {
                h1 {
                    font-size: 50px;
                    line-height: 90px;
                }
            }
        }
    }
`;

const LandingPage = () => {
    return (
        <StyledLandingPage>
            <Row className="main" justify={'center'} column>
                <Row className="main__content" column>
                    <img src={logo} alt="logo" />
                    <Text blue semibold>O'zbekistonda o'z o'rniga ega bo'lgan va uzoq yillardan beri xaridorlar ishonchiga erisha olgan online do'kon</Text>
                    <Link to='/auth/login-or-signup' className="main__link"><Button >Tizimga kirish</Button></Link>
                </Row>
            </Row>
            <Container className="section">
                <Title title50 className="section__title">Bizning afzalliklarimiz</Title>
                <Row className="section__cards" row>
                    <Col sm={12} md={4} ><LandingCard img={delivery} title={"Bepul yetkazib berish"} text="O’zbekiston bo’ylab yetkazib berish imkoniyati mavjud" /></Col>
                    <Col sm={12} md={4} ><LandingCard img={stopwatch} title={"Buyurtmalar 24 soatda yetkaziladi"} text="Istalgan buyurtmalar 24 soat ichida yetkazib beriladi" /></Col>
                    <Col sm={12} md={4} ><LandingCard img={ticket} title={"Aksiya narxida xarid qilish imkoniyati"} text="Agar hozir xarid qilsangiz uni <span>CHEGIRMA</span> narxida olishga erishasiz!" /></Col>
                </Row>
                <Title title50 className="section__title">Raqamlar biz haqimizda</Title>
                <Row className="section__numberAbout" row>
                    <Col sm={12} md={4} >
                        <h1>13</h1>
                        <p>Viloyatlar</p>
                    </Col>
                    <Col sm={12} md={4} >
                        <h1>565489</h1>
                        <p>Umumiy buyurtmalar</p>
                    </Col>
                    <Col sm={12} md={4} >
                        <h1>156</h1>
                        <p>Ayni vaqtda yetkazib berilayotgan buturtmalar soni</p>
                    </Col>
                </Row>
            </Container>
        </StyledLandingPage>
    )
}

export default LandingPage
