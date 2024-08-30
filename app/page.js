"use client";

import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(desc);
    setMainTask([...mainTask, { title, desc }]);
    setdesc("");
    settitle("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {      
    let copytask = [...mainTask];
    copytask.splice(i, 1);
      }      

  let renderTask = <h2 >No task available </h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return <li key={i} className="flex items-center justify-between"> <div className=" flex items-center justify-between mb-5 w-2/3">
            <h5 className="text-xl font-semibold ">{t.title}</h5>
            <h6 className="text-lg font-medium ">{t.desc}</h6>
   </div>
   <button onClick={()=> {deleteHandler(i)}} className= "bg-red-600 text-white px-4 py-2 rounded font-bold ">Delete</button>
   </li>
    })
  
  }
  return (
    <>
      <h1 className="bg-black text-red p-5 text-5xl text-center font-bold">
        PAIN-XER's TODO LIST
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-red-500 text-2xl border-zinc-800 border-2 m-8 px-4 py-2"
          placeholder="Enter title here....."
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>
        <input
          type="text"
          className="text-red-500 text-2xl border-zinc-800 border-2 m-8 px-4 py-2"
          placeholder="Enter task decription here....."
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        ></input>

        <button className="bg-amber-500 text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add task
        </button>
      </form>
      <hr></hr>
      <div className="p-8 bg-blue-500">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
