import "./toggleStatuses.scss";

function ToggleStatuses({handleAllDone, doneAll}) {
    return (
        <i
            className={doneAll ? 'toggleStates done': 'toggleStates'}
            onClick={handleAllDone}
        ></i>
    );
}

export default ToggleStatuses;