import React, { useState, useRef } from 'react';
import Menu from '../components/Menu';

export default function Header() {
    const [tasks, setTasks] = useState([]);
    const inputEl = useRef(null);
    const inputElStartTime = useRef(null);
    const inputElEndTime = useRef(null);
    const [editIndex, setEditIndex] = useState(-1); // Индекс задачи, которую мы редактируем

    function addTask() {
        const taskName = inputEl.current.value.trim();
        const taskStartTime = inputElStartTime.current.value.trim();
        const taskEndTime = inputElEndTime.current.value.trim();
        const taskFull =  taskName + " выполнить с: " + taskStartTime + " до: " + taskEndTime;
        setTasks(prevTasks => [...prevTasks, taskFull]);
        inputEl.current.value = ''; // очищаем поле ввода после добавления задачи
    }

    function deleteTask(index) {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }

    function startEditing(index) {
        setEditIndex(index);
    }

    function endEditing(index, newValue) {
        const newTasks = [...tasks];
        newTasks[index] = newValue;
        setTasks(newTasks);
        // setEditIndex(-1); // Завершаем редактирование
    }
    function finishEditing() {
        setEditIndex(-1);
    }
    return (
        <div className='flex flex-col justify-center text-center w-full mt-5 h-full'>
            <Menu/>
            <span>Текст задачи </span>
            <input ref={inputEl} type="text" name="startTimeTask" className='mb-5 bg-gray-100 border border-gray-300 w-60 text-center mx-auto' />
            <span>Время начала: </span>
            <input ref={inputElStartTime} type="time" name="endTimeTask" className='mb-5 bg-gray-100 border border-gray-300 w-60 text-center mx-auto' />
            <span>Время конца: </span>
            <input ref={inputElEndTime} type="time" name="nameTask" className='mb-5 bg-gray-100 border border-gray-300 w-60 text-center mx-auto' />
            <button onClick={addTask} className='btn bg-cyan-500 hover:bg-cyan-600 text-white p-3 w-60 text-center mx-auto'>Добавить задачу</button>
            <ol className="list-decimal text-start mx-auto mt-5">
            {tasks.map((task, index) => (
                <li key={index}> {index === editIndex ? (
                    <input
                        type="text"
                        className='mb-5 bg-gray-100 border border-gray-300 w-60 text-center mx-auto '
                        value={task}
                        onChange={(e) => endEditing(index, e.target.value)}
                        onBlur={()=> finishEditing()}
                    />
                ) : (
                    <>
                        {task}
                        <button className="btn bg-yellow-300 pt-1 pb-1 pl-3 pr-3 m-1 text-black rounded-sm" onClick={() => startEditing(index)}>Edit</button>
                    </>
                )}
                <button className="btn bg-blue-600 pt-1 pb-1 pl-3 pr-3 m-1 text-white rounded-sm" onClick={() => deleteTask(index)}>Delete</button>
                </li>
            ))}
            </ol>
        </div>
    );
}
