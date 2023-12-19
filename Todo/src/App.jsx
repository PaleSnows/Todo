import { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    setNewTask(e.target.value);
  };

  const addHandler = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteHandler = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  return (
    <>
      <div className="w-screen h-screen bg-blue-300 p-4">
        <div className="bg-green-300 p-4 shadow mx-auto">
          <h3 className="text-center font-bold text-2xl">Todo Application</h3>
          <form className="flex justify-between" onSubmit={formHandler}>
            <input
              className="w-full text-black border rounded-sm p-2 m-2 bg-slate-100 text-lg"
              onChange={changeHandler}
              type="text"
              placeholder="Add Tasks"
            />
            <button className="border m-2 p-4 rounded-sm" onClick={addHandler}>
              <AiFillEdit />
            </button>
          </form>
          <ul>
            {todoList.map((task, index) => {
              return (
                <div className="bg-gray-200 m-2 p-2">
                  <li className="flex justify-between" key={index}>
                    <p className="text-lg p-1 ">{task.taskName}</p>
                    <button onClick={() => deleteHandler(task.id)}>
                      <AiFillDelete size={20} />
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
