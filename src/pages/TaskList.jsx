import React, { useState, useRef } from "react";
import Task from "./Task";

const TaskList = () => {
  const [task, settask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const inputRef = useRef();

  const formsubmit = (e) => {
    e.preventDefault();
    let inputvalue = inputRef.current.value.trim();

    if (inputvalue === "") {
      alert("Please enter some value..");
      return;
    }

    if (editIndex !== null) {
      // Edit mode
      const updatedTasks = [...task];
      updatedTasks[editIndex] = inputvalue;
      settask(updatedTasks);
      setEditIndex(null);
    } else {
      // Add mode
      if (!task.includes(inputvalue)) {
        settask([...task, inputvalue]);
      } else {
        alert("Please enter a different value..");
        return;
      }
    }

    inputRef.current.value = ""; // clear field
  };

  const handlDelete = (deletedIndex) => {
    const filterTask = task.filter((_, index) => index !== deletedIndex);
    settask(filterTask);
    if (editIndex === deletedIndex) setEditIndex(null); // clear edit if deleted
  };

  const handleEdit = (index) => {
    inputRef.current.value = task[index]; // set value in input
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          📝 Todo List
        </h1>

        <form onSubmit={formsubmit} className="flex gap-2 mb-6">
          <input
            type="text"
            ref={inputRef}
            name="inputvalue"
            placeholder="Enter a task..."
            className="flex-grow border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </form>

        <ul>
          {task.length === 0 ? (
            <p className="text-center text-gray-500">No tasks yet.</p>
          ) : (
            task.map((item, index) => (
              <Task
                key={index}
                value={item}
                index={index}
                deltehandler={handlDelete}
                edithandler={handleEdit}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
