import React, { FormEvent, useState } from 'react';
import timestyle from '../styles/time.module.css';

export default function FormCreateTask({ onSaveTask }) {
  const [task, setTask] = useState('');
  const [endTime, setEndTime] = useState('');

  function handlerForm(e: FormEvent) {
    e.preventDefault();
    onSaveTask(task, endTime);
    setTask('');
    setEndTime('');
  }

  function handlerTextTask(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTask(e.target.value);
  }

  function handlerTimeTask(e: React.ChangeEvent<HTMLInputElement>) {
    setEndTime(e.target.value);
  }

  return (
    <form className='flex flex-col w-1/3 mx-auto mt-5 gap-3' onSubmit={handlerForm}>
      <textarea
        name="textOfTask"
        placeholder='Текст задачи: '
        className='border p-1'
        value={task}
        onChange={handlerTextTask}
      ></textarea>
      <input
        type="time"
        name="startTimeTask"
        className={`border p-1 ${timestyle.timepicker}`}
        value={endTime}
        onChange={handlerTimeTask}
      />
      <button className='bg-blue-400 text-white p-1 rounded-sm'>Добавить</button>
    </form>
  );
}
