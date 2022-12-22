import "./style.css";

const Section = ({ title, body, firstExtraHeaderContent, secondExtraHeaderContent }) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__title">
                {title}
            </h2>
            {firstExtraHeaderContent}
            {secondExtraHeaderContent}
        </header>
        <div className="section__container">
            {body}
        </div>
    </section>
);

export default Section;