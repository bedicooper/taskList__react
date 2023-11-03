const Counter = ({ tasks }) => {

    const countUndone = (array) => array.filter(task => !task.done);

    return (
        <div>
            {tasks.length
                ? <span>pozostało zadań: {countUndone(tasks).length}</span>
                : ``
            }
        </div>
    )
};

export default Counter;