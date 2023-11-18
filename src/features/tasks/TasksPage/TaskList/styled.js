import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.color.secondary};

    ${({ $hidden }) => $hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 24px;
    height: 24px;
    border: none;
    background-color: rgb(0, 130, 0);
    background-position: 50% 50%;
    background-size: cover;
    padding: 0;
    transition: background-color 250ms ease-in-out;
    color: rgb(255,255,255);

    &:hover {
        background-color: rgb(0, 150, 0);
    }

    ${({ $remove }) => $remove && css`
        background-color: rgb(190, 0, 0);

        &:hover {
            background-color: rgb(210, 0, 0);
        }
    `}
`;

export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
`;