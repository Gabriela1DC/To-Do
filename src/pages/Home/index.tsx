import "./style.css";
import { Card } from "../../components/Card";
import React, { useState } from "react";


export function Home() {


  const [taskContent, setTaskContent] = useState();
  const [groupTask, setGroupTask] = useState<string[]>([]);

  function handleAddTask() {
    const newTask = {
      content: taskContent,
        time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setGroupTask((prevState: any) => [...prevState, newTask]);
  }

  return (
    <div className="container">
      <header>
        <h1>My To-Do List</h1>
        <div>
          <strong>Gabriela D.C</strong>
          <img src="https://github.com/gabriela1dc.png" alt="Foto de perfil" />
        </div>
      </header>
      
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setTaskContent(e.target.value)}
      />
      <button type="button" onClick={handleAddTask}>
        Adicionar
      </button>

      {groupTask.map((tasks, id) => (
        <Card key={id} content={tasks.content} time={tasks.time} />
      ))}
    </div>
  );
}
