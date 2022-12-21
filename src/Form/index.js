import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__field" name="addTask" placeholder="Co jest do zrobienia?" />
        <button className="form__submitButton">Dodaj zadanie</button>
    </form>
)

export default Form;