import Task from "./Task";
import './tasks.scss';


function Tasks({handleContentEditable, tasks, filter, handleDeleteTask, handleChangeStatus}) {
    return (
        <ul className='tasks'>
            {tasks
                .filter((task) => filter === 'all' ? true : task.status === filter)
                .map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        handleDeleteTask={handleDeleteTask}
                        handleChangeStatus={handleChangeStatus}
                       handleContentEditable={handleContentEditable}

                    />
                ))}
        </ul>
    );
}

export default Tasks;