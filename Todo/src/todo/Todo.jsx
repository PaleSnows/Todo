import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Todo = () => {
  const [taskList, setTaskList] = useState("");
  const [displayTaskList, setDisplayTaskList] = useState([]);

  const taskHandler = (e) => {
    setTaskList(e.target.value);
  };
  console.log(taskList);

  const displayHandler = () => {
    const display = {
      id:
        displayTaskList.length === 0
          ? 1
          : displayTaskList[displayTaskList.length - 1].id + 1,
      taskName: taskList,
    };
    setDisplayTaskList([...displayTaskList, display]);
  };

  const formHandler = (e) => {
    e.preventDefault();
  };

  const deleteHandler = (id) => {
    //task.id(suupose 1) !== id(suppose 1) its false so its should be include and will be filtered
    setDisplayTaskList((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col justify-center items-center my-[100px] p-2   ">
      <div className=" bg-blue-300 w-[700px] p-5 rounded-lg shadow-lg">
        <form onSubmit={formHandler} className="flex flex-col  text-center ">
          <h1 className="text-2xl p-3 font-semibold">Todo App</h1>
          <div className="flex items-center justify-center p-3 mb-4 gap-3 ">
            <input
              type="text"
              name=""
              id="task"
              className="rounded-md w-[1000px] p-3 "
              placeholder="Tasks..."
              onChange={taskHandler}
            />
            <AiFillEdit
              onClick={displayHandler}
              className="    cursor-pointer text-black"
              size={32}
            />
          </div>
        </form>
      </div>
      <div className="bg-blue-200 mt-6 w-[700px] p-4 rounded-lg shadow-lg">
        <h1 className="text-xl text-center italic font-semibold mb-4 ">
          Task List...
        </h1>
        <div className="flex flex-col gap-5 h-fit">
          {displayTaskList.map((display, index) => (
            <ul className="">
              <li className="flex ">
                <p className="p-3 w-full border rounded bg-blue-50 mx-3">
                  {display.taskName}
                </p>
                <button onClick={() => deleteHandler(display.id)}>
                  <AiFillDelete size={20} />
                </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
