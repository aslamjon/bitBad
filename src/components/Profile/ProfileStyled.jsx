import styled from 'styled-components'

const ProfileContainer = styled.div`
    
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
            /* transform: translateX(400px); */
            /* padding: 15px 12px; */
            transition: 0.2s;
            height: 0;
            padding: 0;
            overflow: hidden;
            ul {
                display: block;
                li {
                    margin: 15px 0;
                    a, span {
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
            /* transform: translateX(0px); */
            padding: 15px 12px;
            height: 85px;
        }
    }
`;

export {
    ProfileContainer
}