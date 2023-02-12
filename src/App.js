import {useEffect, useState} from "react";
import Header from "./components/Header/Header";
import InputWrapper from "./components/InputWrapper/InputWrapper";
import Tasks from "./components/Tasks/Tasks";
import {TaskCounter} from "./components/TaskCounter/TaskCounter";
import {Filters} from "./components/Filters/Filters";
import {ClearCompleted} from "./components/ClearCompleted/ClearCompleted";
import {addTaskApi, changeStatusApi, deleteTaskApi, getAllTasksApi} from "./helpers/api";

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');


    useEffect(() => {
        const controller = new AbortController();
        getAllTasksApi(controller.signal).then(setTasks);

        return () => {
            controller.abort();
        }
    }, [])


    async function handleAddTask(value) {
        const task = await addTaskApi({name: value, status: false, createdAt: new Date()});
        setTasks([...tasks, task]);
    }


   async function handleChangeStatus(task) {
        task.status = !task.status;
        await changeStatusApi(task.id, task.status);
        setTasks([...tasks])
    }

    async function handleDeleteTask(taskToRemove) {
        await deleteTaskApi(taskToRemove.id);
        setTasks(tasks.filter((task) => task !== taskToRemove));
    }

    async function handleDeleteAllTasks() {
        const filteredTasks = [];

        for (const task of tasks) {
            if (task.status) {
                console.log(task);
                await deleteTaskApi(task.id)
            } else {
                filteredTasks.push(task);
            }
        }
        setTasks(filteredTasks);
    }

   async function handleAllDone() {
        let done = tasks.every((task) => task.status === true)

        const mappedTasks = [];

        for (const task of tasks){
            mappedTasks.push({...task, status: !done});
            await changeStatusApi(task.id, task.status);
        }

        setTasks(mappedTasks);
    }

    function handleContentEditable(event, taskToChange) {
        setTasks(tasks.map((task) => {
            if (task === taskToChange) {
                task.name = event.target.innerText;
            }
            return task;
        }))
    }

    return (
        <div>
            <Header/>
            <InputWrapper
                tasks={tasks}
                handleAllDone={handleAllDone}
                handleAddTask={handleAddTask}
            />

            {!!tasks.length && (
                <>
                    <Tasks
                        tasks={tasks}
                        filter={filter}
                        handleContentEditable={handleContentEditable}
                        handleChangeStatus={handleChangeStatus}
                        handleDeleteTask={handleDeleteTask}
                    />
                    <div>
                        <TaskCounter tasks={tasks} predicate={(task) => !task.status}/>
                        <Filters setFilter={setFilter}/>

                        {!!tasks.filter((task) => task.status).length && (
                            <ClearCompleted onClick={handleDeleteAllTasks}/>)}
                    </div>
                </>
            )}


        </div>
    );
}

export default App;