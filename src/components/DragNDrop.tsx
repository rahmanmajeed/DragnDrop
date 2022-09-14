import React from "react";

import { Status } from "../interfaces";
import Container from "./Container";

const todoTypes: Status[] = ["task", "in-progress", "done"];

function DragNDrop() {
  return (
    <div className="flex flex-row justify-evenly items-center w-full">
      {todoTypes.map((item, index) => (
        <Container status={item} key={index} />
      ))}
    </div>
  );
}

export default DragNDrop;
