import './inputWrapper.scss'

import InputTask from "./InputTask";
import ToggleStatuses from "../ToggleStatuses/ToggleStatuses";

function InputWrapper({tasks, handleAddTask, handleAllDone}) {
    return (
        <div className='inputWrapper'>
            {!!tasks.length && (
            <ToggleStatuses tasks={tasks} handleAllDone={handleAllDone} />
                )}
            <InputTask
                handleAddTask={handleAddTask}
            />
        </div>
    );
}

export default InputWrapper;