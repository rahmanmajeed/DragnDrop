import { useState } from "react";
import { Title } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Title />
    </div>
  );
}

export default App;
