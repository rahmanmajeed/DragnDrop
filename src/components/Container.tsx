import React from "react";
import { Status, Data } from "../interfaces";
import CardItem from "./CardItem";

interface Props {
  status: Status;
  items: Data[];
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: number, status: Status) => void;
}

function Container({
  status,
  items = [],
  isDragging,
  handleDragging,
  handleUpdateList,
}: Props) {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e.dataTransfer.getData("text"), status);
    handleUpdateList(+e.dataTransfer.getData("text"), status);
    handleDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  return (
    <>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={`border border-gray-400 shadow-lg h-full w-64 min-h-[80vh] max-h-64 ${
          isDragging
            ? "bg-purple-100 border-[2px] border-dashed border-purple-100"
            : ""
        }`}
      >
        <p className="p-2 text-center text-xl font-bold bg-orange-500">
          {status}
        </p>
        {/* Cards */}
        {items.map(
          (item, index) =>
            status === item.status && (
              <CardItem
                item={item}
                key={index}
                handleDragging={handleDragging}
              />
            )
        )}
      </div>
    </>
  );
}

export default Container;
