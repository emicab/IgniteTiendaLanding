import styled, { css } from 'styled-components';

export const Separador = styled.div`
    width: 100%;
    height: 130px;
    background-color: ${p => p.backgroundcolor};
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: ${p => p.textcolor};

    @media screen and (max-width: 768px) {
        height: 100px;
        font-size: 20px;
    }
`;

export const Button = styled.button`
    background-color: ${p => p.backgroundcolor};
    border-radius: 5px 1px;
    border: none;
    cursor: pointer;
    font-size: 20px;
    height: 50px;
    transition: .2s ease;
    text-transform: uppercase;
    width: 170px;

    &:hover {
        filter: brightness(1.1);
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
        height: 40px;
        width: 150px;
    }
`;

export const StyledCard = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 8px 2px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: space-around;
    margin: 20px;
    padding: 20px;
    width: 380px;

    .img {
        height: 300px;
        width: 300px;
        background-color: #333;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 30px;
        font-weight: bold;
    }

    .title-price {
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        margin-bottom: 5px;
        width: 100%;

        h2 {
            font-size: 20px;
        }

        span {
            font-size: 20px;
            color: #555;
            font-weight: 500;
        }
    }

    .card-details {
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
        width: 300px;

        span {
            font-size: 18px;
            color: #666;
        }
    }

    .cont-btn {
        display: flex;
        justify-content: space-between;

        button {
            margin: 5px;
        }
    }

    @media screen and (max-width: 768px) {
        /* width: 100%; */

        .img {
            height: 200px;
            width: 200px;
            font-size: 24px;
        }

        .title-price {
            flex-direction: column;
            text-align: center;

            h2 {
                font-size: 18px;
            }

            span {
                font-size: 16px;
            }
        }

        .card-details {
            width: 100%;

            span {
                font-size: 16px;
            }
        }

        .cont-btn {
            flex-direction: column;
            align-items: center;

            button {
                margin: 5px 0;
            }
        }
    }
`;
