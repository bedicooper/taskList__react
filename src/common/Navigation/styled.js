import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.accent};;
`;

export const Container = styled.div`
    width: 120px;
    padding: 10px;
`;

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName} {
        font-weight: bold;
    };
    
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;
`;