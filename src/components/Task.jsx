import React from "react";
import { useStore } from "../store/store";

export default function Task({ title }) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const deleteTask = useStore((store) => store.deleteTask);
  return (
    <div draggable className="bg-white rounded-s min-h-20 text-black p-2 flex flex-col justify-between mb-2 cursor-move">
      <div>{task.title}</div>
      <div className="flex justify-between">
        <button className="block">
          <img
            src="/trash-2.svg"
            alt=""
            className="h-5"
            onClick={() => deleteTask(title)}
          />
        </button>
        <div className="text-xs bg-gray-200 p-1 rounded-s">{task.state}</div>
      </div>
    </div>
  );
}
