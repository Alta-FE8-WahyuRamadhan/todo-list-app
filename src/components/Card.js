import React from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const Card = ({ content, detail, description, handleDelete }) => {
  return (
    <>
      <div className="bg-slate-400 w-40 h-auto p-2 rounded mx-auto">
        <h1 className="text-blue-700 font-bold">Task: {content}</h1>
        <h2 className="text-blue-700 italic">Desc: {description}</h2>
        <div className="flex justify-center">
          <button
            className="px-2 text-white rounded-full mr-2 bg-yellow-600"
            onClick={detail}
          >
            Detail
          </button>
          <button
            className="px-2 text-white rounded-full bg-yellow-600"
            onClick={handleDelete}
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
