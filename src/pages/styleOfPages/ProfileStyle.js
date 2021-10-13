import styled from 'styled-components';

const ProfileStyled = styled.div`
.nameAndNumOfContainer {
    padding: 58px 51px 55px 39px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-top: 50px;
    color: #334D6E;
    &__title {
        margin-bottom: 19px;
    }
    label {
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.01em;
    }
    input {
        border: none;
        outline: none;
        background: #F0F0F0;
        border-radius: 15px;
        padding: 10px 15px;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.01em;
        color: #929FAF;
        margin-top: 8px;
        margin-bottom: 33px;
        display: block;
        width: 100%;
    }
    &__inputContainer {
        display: flex;
        align-items: center;
        background: #F0F0F0;
        border-radius: 15px;
        margin-top: 15px;
        margin-bottom: 49px;
        padding: 0px 15px;
        font-weight: normal;
        line-height: 27px;
        letter-spacing: 0.01em;
        input {
            margin-bottom: 0;
            margin-top: 0px;
        }
    }
    button {
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.01em;
        padding: 6px 30px;
        box-shadow: 0px 0px 4px 5px rgba(0, 100, 0, 0.25);
    }
}
.box {
    margin-top: 50px;
    form {
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        color: #334D6E;
    }
    input {
        border: none;
        outline: none;
        width: 100%;
    }
    &__cart {
        padding: 39px 39px 23px;
        &__title {
            margin-bottom: 19px;
        }
        input {
            font-weight: 600;
            font-size: 30px;
            line-height: 45px;
            letter-spacing: 0.01em;
            color: #334D6E;
            margin-top: 19px;
        }
    }
    &__confirm {
        padding: 33px 39px 34px;
        margin-top: 4vh;
        &__title {
        }
        input {
            margin-top: 16px;
            margin-bottom: 26px;
            background: #F0F0F0;
            border-radius: 15px;
            font-weight: normal;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: 0.01em;
            color: #929FAF;
            padding: 16px 14px;
        }
        button {
            box-shadow: 0px 0px 4px 5px rgba(0, 100, 0, 0.25);
            font-weight: 600;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: 0.01em;
        }
    }
}
`;

export {
    ProfileStyled
}