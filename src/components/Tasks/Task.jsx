import './task.scss'

function Task({task, handleDeleteTask, handleChangeStatus}) {
    const {id, status, name} = task;

    function handleContentEditable(event){
        console.log(event.target.innerText)
    }

    return (
        <li key={id} className={status ? 'task done' : 'task'} >
            <i
                className='taskStatus'
                onClick={() => {
                handleChangeStatus(task)
            }}
            >
            </i>
            <span
                className='taskName'
                onBlur={(event) => handleContentEditable(event, task)}
                // contentEditable
            >{name}</span>
            <button className='taskDeleteBtn' onClick={() => handleDeleteTask(task)}>x</button>
        </li>
    );
}

export default Task;