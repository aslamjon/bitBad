import React from 'react';
import {FooterStyled} from './FooterStyle';
import { Row, Col } from '../Grid';
import SvgIcon from '../SvgIcon';
import phone from '../../assets/images/phone.svg';
import location from '../../assets/images/location.svg';
import telegram from '../../assets/images/telegram.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';


const Footer = () => {
    return (
        <FooterStyled className="footer">
            <Row row>
                <Col sm={12} md={6} >
                    <div className="footer__contact">
                        <a href="https://aslamjon.github.io" target="_blank" rel="noreferrer">
                            <SvgIcon src={phone} />
                            Telefon raqam
                        </a>
                        <a href="https://aslamjon.github.io" target="_blank" rel="noreferrer">
                            <SvgIcon src={location} />
                            Address
                        </a>
                    </div>
                </Col>
                <Col sm={12} md={6} >
                    <div className="footer__social">
                        <a href="https://aslamjon.github.io" target="_blank" rel="noreferrer">
                            <SvgIcon src={telegram} />
                        </a>
                        <a href="https://aslamjon.github.io" target="_blank" rel="noreferrer">
                            <SvgIcon src={facebook} />
                        </a>
                        <a href="https://aslamjon.github.io" target="_blank" rel="noreferrer">
                            <SvgIcon src={instagram} />
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className="footer__copyright" justify="space-between">
                <p>© 2021 Medical Plants: Barcha huquqlar himoylangan</p>
                <p>Sayt <a href="http://myurls.co/aslamjon" target="_blank" rel="noreferrer">Aslamjon</a> tomonidan ishlab chiqildi</p>
            </Row>
        </FooterStyled>
    )
}
export default Footer;