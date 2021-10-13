import styled from "styled-components";

const ProductsPageStyled = styled.div`
    .products_tab {
        background: #fff;
        padding: 29px 0 31px 22px;
        box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        ul {
            li {
                font-weight: 500;
                font-size: 15px;
                line-height: 19px;
                letter-spacing: 0.01em;
                color: rgba(51, 77, 110, 0.7);
                margin: 36px 0;
                transition: 0.2s;
                cursor: pointer;
                &:first-child {
                    margin-top: 0;
                    color: #006400;
                }
                &:last-child {
                    margin-bottom: 0;
                }
                &:hover {
                    color: #006400;
                }
            }
        }
    }
`
export {
    ProductsPageStyled
}