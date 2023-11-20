import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.ul`
    display: flex;
    margin: 0;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.accent};;
`;

export const Container = styled.li`
    width: 120px;
    padding: 10px;
    list-style-type: none;
    text-align: center;
`;

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;
    
    &.${activeClassName} {
        font-weight: bold;
    };
    
    &:hover{
        border-bottom: 1px solid;
    };
`;