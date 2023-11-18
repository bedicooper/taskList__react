import styled from "styled-components";

export const Button = styled.button`
    margin: 0 0 0 20px;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color.accent};
    transition: color 250ms ease-in-out;

    @media (max-width: ${({ theme }) => theme.brakepoints.moblieMax}px) {
        flex-basis: 100%;
        margin: 10px; 
    }

    &:hover {
        color: ${({ theme }) => theme.color.accentHover};
    }

    &:disabled {
        color: #bbb;
    }
`;