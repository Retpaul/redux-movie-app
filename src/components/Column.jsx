import { shallow } from "zustand/shallow";
import Task from "./Task";
import { useStore } from "../store/store";
import { useState } from "react";

export default function Column({ state }) {
  const [text, setText] = useState("");
  const [open, setIsOpen] = useState(false);
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );
  const addtasks = useStore((store) => store.addTask);
  return (
    <div
      className="bg-gray-900 min-h-[20rem] text-white w-[33%] max-w-[20rem] mx-2 rounded-s p-2 border-4 border-dashed border-transparent "
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e)=> console.log("Dropped")}
    >
      <div className="flex justify-between items-center">
        <p>{state}</p>
        <button
          className="text-black bg-white p-2 rounded-s h-fit hover:bg-gray-200"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Add
        </button>
      </div>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
      {open && (
        <div className="absolute bg-[rgba(0,0,0)] opacity-30 w-full h-full top-0 left-0 ">
          <div className="bg-white absolute z-[1] p-4 h-20 w-80 top-[50%] left-[50%]  transform flex justify-center items-center rounded-s">
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button
              onClick={() => {
                addtasks(text, state);
                setText("");
                setIsOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
