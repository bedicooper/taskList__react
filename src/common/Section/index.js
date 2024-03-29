import { Wrapper, SectionHeader, Title, Container } from "./styled";

const Section = ({ title, body, firstExtraHeaderContent, secondExtraHeaderContent }) => (
    <Wrapper>
        <SectionHeader>
            <Title>
                {title}
            </Title>
            {firstExtraHeaderContent}
        </SectionHeader>
        <Container>
            {body}
        </Container>
    </Wrapper>
);

export default Section;