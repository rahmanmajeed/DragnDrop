import React from "react";
import { Status } from "../interfaces";

interface Props {
  status: Status;
}

function Container({ status }: Props) {
  return (
    <>
      <div className="overflow-y-scroll bg-orange-500 h-64 min-h-[150px] max-h-64">
        <p>{status}</p>
        {/* Cards */}
      </div>
    </>
  );
}

export default Container;
