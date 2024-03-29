import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.primary};
    margin: 10px 0;
    box-shadow: 0 0 5px #ddd;
`;

export const SectionHeader = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 2px solid ${({ theme }) => theme.color.secondary};

    @media (max-width: ${({ theme }) => theme.brakepoints.moblieMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
`;

export const Container = styled.div`
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.brakepoints.moblieMax}px) {
        flex-basis: 100%;
        justify-self: center;
    }
`;
