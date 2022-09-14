import React, { useEffect, useState } from "react";

import { Status, Data } from "../interfaces";
import Container from "./Container";
import {data} from '../assets/index'

const todoTypes: Array<Status> = ["task", "in-progress", "done"];

function DragNDrop() {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState<Data[]>([])

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);


  const handleUpdateList = (id:number, status:Status) => {
    //find the item by id..
    let card = listItems.find(item => item.id === id)

    //update list...
    if (card && card.status !== status) {

      card.status = status

      setListItems( prev => ([
           card!,
           ...prev.filter(item => item.id !== id)
       ]))
    }

  }

  useEffect(()=> {
     setListItems(data)
  },[data])

  return (
    <div className="grid grid-flow-col justify-center gap-5 items-center">
      {todoTypes.map((item, index) => (
        <Container status={item} key={index} items={listItems} isDragging={isDragging} handleDragging={handleDragging} handleUpdateList={handleUpdateList}/>
      ))}
    </div>
  );
}

export default DragNDrop;
