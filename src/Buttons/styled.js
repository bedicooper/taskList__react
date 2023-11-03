import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    margin: 0 0 0 20px;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.accentColor};
    transition: color 250ms ease-in-out;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px; 
    }

    &:hover {
        color: ${({ theme }) => theme.accentHover};
    }

    &:disabled {
        color: #bbb;
    }
`;