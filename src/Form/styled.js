import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
         grid-template-columns: 1fr;
    }
`;

export const Field = styled.input`
    padding: 8px; 
    border: 1px solid #d4d4d4;
`;

export const SubmitButton = styled.button`
    background-color: ${({ theme }) => theme.accentColor};
    color: #fff;
    font-weight: 300;
    border: 1px solid ${({ theme }) => theme.accentColor};
    padding: 8px;
    transition: 500ms ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.accentHover};
        transform: scale(1.1);

        @media (max-width: 767px) {
            transform: scale(1.04);
        }
    }

    &:active {
        background-color: ${({ theme }) => theme.accentActive};
        transform: scale(1.1);
    }
`;