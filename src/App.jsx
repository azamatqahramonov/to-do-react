import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    const trimmedValue = inputValue.trim().toLowerCase();
    if (!trimmedValue) return;
    if (tasks.includes(trimmedValue)) {
      alert("Bu vazifa mavjud");
      return;
    }
    setTasks([...tasks, trimmedValue]);
    setInputValue("");
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  const moveTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
    setDoneTasks([...doneTasks, task]);
  };

  return (
    <div className="bg-[#1d1825] min-h-screen flex items-center justify-center font-sans text-white">
      <div className="container max-w-md ">
        <form
          className="flex items-center gap-3 mb-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Add a new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow px-4 py-2 rounded-lg border border-purple-500 bg-inherit text-white focus:outline-none "
          />

          <img onClick={addTask} src="./src/assets/add.svg" alt="" />
        </form>

        <h3 className="text-lg mb-3">Tasks to do - {tasks.length}</h3>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-[#15101c] p-4 rounded-lg"
            >
              <p>{task}</p>
              <div className="flex items-center gap-3">
                <img
                  onClick={() => moveTask(task)}
                  src="./src/assets/check (1).svg"
                  alt=""
                />

                <img
                  onClick={() => deleteTask(task)}
                  src="./src/assets/delete.svg"
                  alt=""
                />
              </div>
            </li>
          ))}
        </ul>

        <h3 className="text-lg mt-6 mb-3">Done - {doneTasks.length}</h3>
        <ul className="space-y-2">
          {doneTasks.map((task, index) => (
            <li
              key={index}
              className="text-[#78cfb0] line-through bg-[#15101c]  p-4 rounded-lg"
            >
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
