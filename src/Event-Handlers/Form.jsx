import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleNameChange=(e)=>{
    setName(e.target.value)
  }

  return (
    <div className="bg-fuchsia-950 shadow p-4 flex w-full justify-between h-[70vh] text-white ">
      <div className="w-[40%]">
        <div className="flex justify-between items-baseline w-[100%]">
          <h1 className="text-2xl">Welcome {name}</h1>
          <div className="relative">
            <p>notifications</p>
          </div>
        </div>
      </div>
      <div className="bg-fuchsia-500 rounded flex flex-col text-black gap-4 p-6 w-[50%] ">
        <input value={name} onChange={handleNameChange} className="bg-white rounded p-2" type="text" />
        <input className="bg-white rounded p-2" type="email" name="" id="" />
        <div className="relative">
          <p className="">1</p>
        </div>
      </div>
    </div>
  );
}
export default Form;
