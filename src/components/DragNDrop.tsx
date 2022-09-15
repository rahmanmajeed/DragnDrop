import axios from "axios";
import React, { useEffect, useState } from "react";

import { Status, Data } from "../interfaces";
import Container from "./Container";
// import { data } from "../assets/index";

const todoTypes: Array<Status> = ["task", "in-progress", "done"];

function DragNDrop() {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState<Data[]>([]);
  const [taskInput, setTaskInput] = useState("");

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  const handleUpdateList = (id: number, status: Status) => {
    //find the item by id..
    let task = listItems.find((item) => item.id === id);

    //update list...
    if (task && task.status !== status) {
      task.status = status;

      axios
        .put(`http://127.0.0.1:8000/api/todos/${id}`, task)
        .then((res) => console.log())
        .catch((err) => new Error("data failed to update"));

      // setListItems((prev) => [task!, ...prev.filter((item) => item.id !== id)]);
    }
  };

  //create new task...
  const handleTaskInput = (e: any) => {
    if (taskInput.trim().length >= 2) {
      const task = {
        content: taskInput.trim(),
        status: "task",
      };
      axios
        .post("http://127.0.0.1:8000/api/todos", task)
        .then((res) => {
          setTaskInput("");
          getAllData();
        })
        .catch((err) => new Error("task failed to create...."));
    }
  };

  // get all todos...
  const getAllData = () => {
    axios
      .get("http://127.0.0.1:8000/api/todos")
      .then((res) => setListItems(res.data))
      .catch((err) => new Error("data not found"));
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <div className="flex flex-row gap-3 mb-5 justify-center items-center w-full">
        <input
          type="text"
          className="py-2 px-2 w-1/6 border border-gray-600 rounded focus:outline-none"
          placeholder="task write here..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button
          type="button"
          onClick={handleTaskInput}
          className="border border-zinc-500 bg-zinc-200 py-2 px-3 hover:bg-green-300 rounded-md"
        >
          Add Task
        </button>
      </div>
      <div className="grid grid-flow-col justify-center gap-5 items-center">
        {todoTypes.map((item, index) => (
          <Container
            status={item}
            key={index}
            items={listItems}
            isDragging={isDragging}
            handleDragging={handleDragging}
            handleUpdateList={handleUpdateList}
          />
        ))}
      </div>
    </>
  );
}

export default DragNDrop;
