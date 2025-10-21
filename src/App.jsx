import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Button from "./ui components/Button";
import Form from "./Event-Handlers/Form";

function App() {
  const [count, setCount] = useState(0);
  const [isPacked, setIsPacked] = useState(false);

  const handleCount = () => {
    if (count === 0) {
      setCount(count + 1);
    } else {
      setCount(count + 2);
    }
  };

  return (
    <>
      {/* <div className="text-red-400 italic">
        <Button/>
         <li className="item">
    {isPacked ? 'name' + ' ✅' : 'name'}
  </li>
      </div> */}
      <div className="p-6 ">
        <div className=" flex items-center justify-center">

        <Form/>
        </div>
      </div>
    </>
  );
}

export default App;
