import React, { useState, useRef, useEffect } from 'react';
import Menu from '../components/Menu';

export default function Header() {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    const inputEl = useRef(null);
    const inputElStartTime = useRef(null);
    const inputElEndTime = useRef(null);
    const [editIndex, setEditIndex] = useState(-1);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function addTask() {
        const taskName = inputEl.current.value.trim();
        const taskStartTime = inputElStartTime.current.value.trim();
        const taskEndTime = inputElEndTime.current.value.trim();
        const taskFull =  taskName + " выполнить с: " + taskStartTime + " до: " + taskEndTime;
        const newTasks = [...tasks, taskFull];
        setTasks(newTasks);
        saveTasksToLocalStorage(newTasks);
        inputEl.current.value = '';
        // taskStartTime.current.value = null;
        // taskEndTime.current.value = null;
    }

    function deleteTask(index) {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
        saveTasksToLocalStorage(newTasks);
    }
    

    function startEditing(index) {
        setEditIndex(index);
    }
    function saveTasksToLocalStorage(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    function endEditing(index, newValue) {
        const newTasks = [...tasks];
        newTasks[index] = newValue;
        setTasks(newTasks);
        saveTasksToLocalStorage(newTasks);
    }
    function finishEditing() {
        setEditIndex(-1);
    }
    return (
        <div className='flex flex-col justify-center text-center w-full mt-5 h-full'>
            <Menu/>
            <span>Текст задачи </span>
            <textarea ref={inputEl} name="taskDescription" className='mb-5 bg-gray-100 border border-gray-300 w-60 text-center mx-auto'></textarea>
            <span>Время начала: </span>
            <input ref={inputElStartTime} type="time" name="endTimeTask" className='mb-5 bg-gray-100 border border-gray-300 w-60 text-center mx-auto' />
            <span>Время конца: </span>
            <input ref={inputElEndTime} type="time" name="nameTask" className='mb-5 bg-gray-100 border border-gray-300 w-60 text-center mx-auto' />
            <button onClick={addTask} className='btn bg-cyan-500 hover:bg-cyan-600 text-white p-3 w-60 text-center mx-auto'>Добавить задачу</button>
            <ol className="list-decimal text-start mx-auto mt-5 w-1/3">
            {tasks.map((task, index) => (
                <li className='mx-auto ' key={index}> 
                    <div className="flex flex-col mx-auto w-full">
                    {index === editIndex ? (
                    <input
                        type="text"
                        className='mb-5 bg-gray-100 border border-gray-300 text-center w-full'
                        value={task}
                        onChange={(e) => endEditing(index, e.target.value)}
                        onBlur={()=> finishEditing()}
                    />
                ) : (
                    <>
                        <label>
                            
                            <span className='text-center font-semibold'>{task}</span> 
                            <input type="checkbox" className='w-5 h-5 mt-1 ml-2'/>
                        </label>
                        <button className="w-full btn bg-yellow-300 pt-1 pb-1 pl-3 pr-3 m-1 text-black rounded-sm" onClick={() => startEditing(index)}>Edit</button>
                    </>
                )}
                <button className="btn bg-blue-600 pt-1 pb-1 pl-3 pr-3 m-1 text-white rounded-sm" onClick={() => deleteTask(index)}>Delete</button>
                    </div> 
                </li>
            ))}
            </ol>
        </div>
    );
}
