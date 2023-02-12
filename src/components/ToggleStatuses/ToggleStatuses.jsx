import "./toggleStatuses.scss";

function ToggleStatuses({handleAllDone, tasks}) {
    return (
        <i
            className={tasks.every((task) => task.status === true) ? 'toggleStates done': 'toggleStates'}
            onClick={handleAllDone}
        ></i>
    );
}

export default ToggleStatuses;