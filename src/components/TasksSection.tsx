import React from 'react';

export default function TaskSection({ tasks, onDeleteTask }) {
  return (
    <div className="cards w-1/3 mx-auto">
      {tasks.map((task, index) => (
        <div key={index} className='mt-2 p-3 bg-gray-100'>
          <p><b>Task:</b> {task[0]}</p>
          <p><b>End Time:</b> {task[1]}</p>
          <button className='bg-red-500 pr-2 pl-2 pt-1 pb-1 text-white' onClick={() => onDeleteTask(index)}>Удалить</button>
        </div>
      ))}
    </div>
  );
}
