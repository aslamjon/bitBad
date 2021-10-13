import React from 'react'
import styled from 'styled-components'
import Button from '../Button';
import Title from '../Title';

const ProductsCardStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const ImgStyled = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${({src}) => src});
    min-height: 176px;
    min-height: 240px;
    height: 100%;
    border-radius: 15px 15px 0px 0px;
`;
const FooterOfCardStyled = styled.div`
    background: #FFFFFF;
    border-radius: 0px 0px 15px 15px;
    padding: 6px 11px 15px;
    .price {
        font-weight: normal;
        font-size: 13px;
        line-height: 19px;
        letter-spacing: 0.01em;
        color: #334D6E;
        margin: 11px 0 16px 0;
    }
    .buttons {
        display: flex;
        justify-content: space-between;
    }
`;

const ProductsCard = ({name, image, price, ...other}) => {
    return (
        <ProductsCardStyled>
            <ImgStyled src={image} />
            <FooterOfCardStyled>
                <Title title13>{name}</Title>
                <div className="price">{price} so'm</div>
                <div className="buttons">
                    <Button>Batafsil</Button>
                    <Button>Oqim yaratish</Button>
                </div>
            </FooterOfCardStyled>
        </ProductsCardStyled>
    )
}

export default ProductsCard
