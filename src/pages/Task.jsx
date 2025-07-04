import React from "react";

const Task = ({ value, index, deltehandler, edithandler }) => {
  return (
    <li className="bg-white shadow p-3 rounded-md mb-2 text-gray-800 hover:bg-blue-50 transition flex items-center justify-between">
      <div>
        <span className="bg-blue-600 rounded-full px-2 py-0.5 text-white mr-4">
          {index + 1}
        </span>
        {value}
      </div>
      <div className="btn">
        <button
          className="bg-yellow-500 p-2 rounded cursor-pointer text-white mr-2"
          onClick={() => edithandler(index)}
        >
          Edit
        </button>
        <button
          className="bg-blue-600 p-2 rounded cursor-pointer text-white"
          onClick={() => deltehandler(index)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
