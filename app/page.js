import React from "react";

const page = () => {
  return (
    <> 
      <h1 className="bg-black text-red p-5 text-5xl text-center font-bold">PAIN-XER's TODO LIST</h1>

      <form  > 
        <input type="text" className="text-red-500 text-2xl border-zinc-800 border-2 m-8 px-4 py-2" placeholder="Enter task here....."></input>
        <input type="text" className="text-red-500 text-2xl border-zinc-800 border-2 m-8 px-4 py-2" placeholder="Enter task decription here....."></input>

        <button className="bg-amber-500 text-white px-4 py-3 text-2xl font-bold rounded m-5">Add task</button>

      </form>
    </>
  );
};

export default page;
