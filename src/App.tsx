import { useState } from "react";
import { DragNDrop, Title } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Title />
      <DragNDrop />
    </div>
  );
}

export default App;
