import { Wrapper, Container, StyledNavLink } from "./styled";

export default () => {
    return (
        <Wrapper>
            <Container>
                <StyledNavLink to="/zadania">Zadania</StyledNavLink>
            </Container>
            <Container>
                <StyledNavLink to="/autor">O Autorze</StyledNavLink>
            </Container>
        </Wrapper>
    );
};