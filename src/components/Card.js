import React from "react";
import axios from "axios";

const Card = ({ content, detail, id }) => {
  const handleDelete = () => {
    var config = {
      method: "delete",
      url: `https://api.todoist.com/rest/v1/tasks/${id}`,
      headers: {
        Authorization: "Bearer 3d1d8b400ac7b81b81fc3369403005779dca728a",
        Cookie: "csrf=c66f6c62c9a34cf8a5008fda8a6fcf55",
      },
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div>{content}</div>
      <button className="rounded-full bg-yellow-600" onClick={detail}>
        cuz ke detail
      </button>
      <button
        className="rounded-full bg-yellow-600"
        onClick={() => handleDelete()}
      >
        delete
      </button>
    </>
  );
};

export default Card;
