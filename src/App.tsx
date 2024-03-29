import { useEffect, useState } from 'react';
import FormCreateTask from './components/FormCreateTask';
import TaskSection from './components/TasksSection';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  const [tasks, setTasks] = useState<string[][]>([]);

  function onSaveTask(task: string, endTime: string) {
    const updatedTasks = [...tasks, [task, endTime]];
    setTasks(updatedTasks);
    localStorage.setItem('myData', JSON.stringify(updatedTasks));
  }

  function onDeleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('myData', JSON.stringify(updatedTasks));
  }

  useEffect(() => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      setTasks(JSON.parse(storedData));
    }
  }, []);

  return (
    <main className='flex flex-col w-full justify-center text-center '>
      <Header />
      {/* <FormCreateTask onSaveTask={onSaveTask} />
      <TaskSection tasks={tasks} onDeleteTask={onDeleteTask} /> */}
    </main>
  );
}
