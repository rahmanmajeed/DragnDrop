import axios from "axios";
import React, { useEffect, useState } from "react";

import { Status, Data } from "../interfaces";
import Container from "./Container";
// import { data } from "../assets/index";

const todoTypes: Array<Status> = ["task", "in-progress", "done"];

function DragNDrop() {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState<Data[]>([]);

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  const handleUpdateList = (id: number, status: Status) => {
    //find the item by id..
    let task = listItems.find((item) => item.id === id);

    //update list...
    if (task && task.status !== status) {
      task.status = status;

      axios
        .put(`http://127.0.0.1:8000/api/todos/${id}`, task)
        .then((res) => console.log(res.data, "after up"))
        .catch((err) => new Error("data failed to update"));

      // setListItems((prev) => [task!, ...prev.filter((item) => item.id !== id)]);
    }
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/todos")
      .then((res) => setListItems(res.data))
      .catch((err) => new Error("data not found"));
  }, []);

  return (
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
  );
}

export default DragNDrop;
