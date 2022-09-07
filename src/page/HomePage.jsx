import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Homepage = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState([]);
  const [iniId, setIniId] = useState(0);
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    getData();
  }, []);



  const getData = async () => {

    let config = {
      method: 'get',
      url: 'https://api.todoist.com/rest/v1/tasks',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
        'Cookie': 'csrf=c66f6c62c9a34cf8a5008fda8a6fcf55'
      }
    };

    await axios(config)
      .then((response) => {
        console.log(response.data);
        setTodo(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleDetailPage = (item) => {
    navigate(`/detail/${item.id}`, {
      state: {
        id: item.id,
        content: item.content,
        description: item.description
      },
    });
  }



  const handleDelete = (item) => {
    let config = {
      method: "delete",
      url: `https://api.todoist.com/rest/v1/tasks/${item.id}`,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        Cookie: "csrf=c66f6c62c9a34cf8a5008fda8a6fcf55",
      },
    };
    axios(config)
      .then(function (response) {
        getData();
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const posting = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      "content": content,
      "description": description,
    });

    var config = {
      method: 'post',
      url: 'https://api.todoist.com/rest/v1/tasks',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
        'Content-Type': 'application/json',
        'Cookie': 'csrf=c66f6c62c9a34cf8a5008fda8a6fcf55'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  const changeData = (event) => {
    setContent(event.target.value);
    getData();
  }
  const changeDesc = (event) => {
    setDescription(event.target.value);
    getData();
  }

  return (
    <>
      <NavBar />
      <div className='sm:p-5'>
        <form className='flex-col flex'>
          <label for="content">Subject</label>
          <input placeholder='Write a subject of your note here' type="text" className='px-2 py-px w-auto bg-slate-500 rounded-full text-white' name='content' onChange={changeData} />
          <label for="description" className='mt-2'>Description</label>
          <input type="text" className='px-2 py-px bg-slate-500 rounded-full text-white' onChange={changeDesc} placeholder='Write a description of your note here' />
        </form>
        <button className='mt-2 rounded-full bg-lime-500 text-white px-2 py-px' onClick={() => posting()}>posting</button>
        <div className='mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
          {todo ? todo.map((item, index) => {
            return (
              <div key={index}>
                <Card id={item.id} description={item.description} content={item.content} detail={() => handleDetailPage(item)} handleDelete={() => handleDelete(item)} />
              </div>
            );
          }) : <></>}
        </div>
      </div>
    </>
  )
}

export default Homepage