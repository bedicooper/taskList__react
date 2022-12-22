const Counter = ({ tasks }) => (
    <div className="list__counter">
        {tasks.length !== 0 && (
            <><span>liczba zadań: {tasks.length}</span></>
        )}
    </div>
);

export default Counter;