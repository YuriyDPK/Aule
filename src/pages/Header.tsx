import React, { useState, useRef } from 'react';

export default function Header() {
    const [tasks, setTasks] = useState([]);
    const inputEl = useRef(null);

    function getNameTask() {
        const taskName = inputEl.current.value.trim();
        setTasks(prevTasks => [...prevTasks, taskName]);
        inputEl.current.value = ''; // очищаем поле ввода после добавления задачи
    }

    return (
        <div className='flex flex-col justify-center text-center w-full mt-5 h-full'>
            <input ref={inputEl} type="text" name="nameTask" className='mb-5 bg-gray-100 border border-gray-300 w-60 text-center mx-auto' />
            <button onClick={getNameTask} className='btn bg-cyan-500 hover:bg-cyan-600 text-white p-3 w-60 text-center mx-auto'>Add Task</button>
            {tasks.map((task, index) => (
                <p key={index}>{task}</p>
            ))}
        </div>
    );
}
