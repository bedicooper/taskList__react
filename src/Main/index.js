import styled from "styled-components";

const MainContainer = styled.main`
    margin: 0 auto;
    max-width: 1200px;
    min-width: 280px;
    padding: 20px;
`;

const Main = ({ children }) => (
    <MainContainer>
        {children}
    </MainContainer>
);

export default Main;