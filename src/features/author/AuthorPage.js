import { MainContainer } from "../../common/Main/MainContainer";
import Section from "../../common/Section";
import Header from "../../common/Header";

const Author = () => (
  <MainContainer>
    <Header
      title={"O Autorze"}
    />
    <Section
      title={"Cześć, nazywam się Mateusz Bednarz"}
      body={
        <>
          <p>
            W ramach kryzusu przed czerdziestką,
            zamiast kupić Teslę postanowiłem zmienić zawód,
            żeby może kiedyś odłożyć na większe mieszkanie.
          </p>
          <p>
            A tak na serio chciałbym spróbować czegoś nowego i
            powiększyć swój wachlarz umiejętności.
            Programowanie wydało mi się ciekawe, myślę,
            że mogę się w tym odnaleść i mieć z tego frajdę
          </p>
          <p>
            Zapraszam na mój profil na githubie gdzie znajdziesz kod tej aplikacji i pozsotałe projekty:<br />
            <a
              href="https://github.com/bedicooper/"
              target='blank'
            >
              github.com/bedicooper/
            </a>
          </p>
        </>
      }
    />
  </MainContainer>
);

export default Author;