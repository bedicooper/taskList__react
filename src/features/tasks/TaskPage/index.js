import { useParams } from 'react-router-dom';
import { MainContainer } from "../../../common/Main/MainContainer";
import Section from "../../../common/Section";
import Header from "../../../common/Header";

function TaskPage() {
    const { id } = useParams();

    return (
        <MainContainer>
            <Header
                title={"Szczegóły zadania"}
            />
            <Section
                title={"Zadanie"}
                body={
                    <>
                        {id} zadanie
                    </>
                }
            />
        </MainContainer>
    )
};

export default TaskPage;