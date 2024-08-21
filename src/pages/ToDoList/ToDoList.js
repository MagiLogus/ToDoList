import React, { useState } from "react";
import "./todolist.css"
import Background from "../../Components/Background/Background";
import TaskCard from "../../Components/TaskCard/TaskCard";
import Title from "../../Components/Date/Date";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Começar a execução do projeto', completed: false },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      name: 'Nova tarefa',
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };
  return (
    <React.Fragment>
      <Background>
        <div className="page-container">
          <div className="task-container">
            <Title />
            <div className="search-bar">

              <input type="text" placeholder="Procurar tarefa" />
            </div>
            {tasks.map(task => (
              <TaskCard id={task.id} name={task.name} completed={task.completed} onClick={() => deleteTask(task.id)} onChange={() => toggleTaskCompletion(task.id)} checked={task.completed} />
            ))}
          </div>
          <button className="add-task-btn" onClick={addTask}>Nova tarefa</button>
        </div>
      </Background>
    </React.Fragment>
  )
};

export default ToDoList;