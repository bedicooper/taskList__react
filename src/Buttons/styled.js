import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    margin: 0 0 0 20px;
    background-color: transparent;
    border: none;
    color: hsl(187, 100%, 26%);
    transition: color 250ms ease-in-out;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px; 
    }

    &:hover {
        color: hsl(187, 100%, 35%);
    }

    &:disabled {
        color: #bbb;
    }
`;