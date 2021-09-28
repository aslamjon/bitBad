import React, {useState, useEffect} from 'react'
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
// import { Row, Col } from 'react-grid-system';
import { Col, Row } from '../components/Grid';
import Title from '../components/Title';
import Button from '../components/Button';
import { ProfileStyled } from './styleOfPages/ProfileStyle';
const ProfilePage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const nameNumberHandling = (data) => {

    }
    
    useEffect(() => {

    }, [])
    return (
        <ProfileStyled>
            <Row row>
                <Col sm={12} md={6}>
                    <form onSubmit={handleSubmit(nameNumberHandling)} className="nameAndNumOfContainer">
                        <Title className="nameAndNumOfContainer__title" title20 color="#334D6E">Aloqa uchun malumotlar</Title>
                        <label htmlFor="name">Ismingizni o’zgartirmoqchimisiz?</label>
                        <input type="text" id="name" {...register('name', { required: true})} placeholder="Yangi ism" />
                        <label htmlFor="number">Telefon raqamingizni kiriting</label>
                        <div className="nameAndNumOfContainer__inputContainer">
                            <span>+998</span>
                            <InputMask mask="99 999 99 99" id="number" maskChar={null} {...register('phone_number', { required: true})} placeholder="** *** ** **" />
                        </div>
                        <Button>Saqlash</Button>
                    </form>
                </Col>
                <Col sm={12} md={6}>
                    <div className="box">
                        <form className="box__cart">
                            <Title className="box__cart__title" title20 color="#334D6E">Hisob raqami</Title>
                            <label htmlFor="cart">Karta raqamingiz</label> <br />
                            <InputMask mask="9999 9999 9999 9999" id="cart" maskChar={null} {...register('cart', { required: true})} placeholder="**** **** **** ****" />
                        </form>
                        <form className="box__confirm">
                            <Title className="box__confirm__title" title20 color="#334D6E">Kodni tasdiqlash</Title>
                            <InputMask mask="999-999" maskChar={null} {...register('confirm', { required: true})} placeholder="***-***" />
                            <Button>Yuborish</Button>
                        </form>
                    </div>
                </Col>
            </Row>
        </ProfileStyled>
    )
}

export default ProfilePage
