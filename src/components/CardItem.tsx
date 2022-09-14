import React from "react";
import { Data } from "../interfaces";

interface Props {
  item: Data;
  handleDragging: (dragging: boolean) => void;
}
function CardItem({ item, handleDragging }: Props) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${item.id}`);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);

  return (
    <div
      className="m-4 p-4 rounded-md bg-gray-200 border border-black font-semibold cursor-pointer"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {item.content}
    </div>
  );
}

export default CardItem;
