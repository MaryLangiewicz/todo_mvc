import './inputWrapper.scss';

function InputTask({value, handleInput, handleAddTask}) {
    return (
        <input
            className='inputTask'
            type="text"
               onKeyUp={handleAddTask}
               onChange={handleInput}
               value={value}
               placeholder="Whats needs to be done?"/>
    );
}

export default InputTask;