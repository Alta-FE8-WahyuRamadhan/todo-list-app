import React, { useState } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';

const DetailTodo = () => {
  const location = useLocation();
  // const [subject,setSubject]=useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [wadah, setWadah] = useState([]);
  const [konten, setKonten] = useState('');


  const handleChange = () => {
    var data = JSON.stringify({
      "content": konten,
      "description": deskripsi,
    });

    var config = {
      method: 'post',
      url: `https://api.todoist.com/rest/v1/tasks/${location.state.id}`,
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
        'Content-Type': 'application/json',
        'Cookie': 'csrf=c66f6c62c9a34cf8a5008fda8a6fcf55'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setWadah(response.data);
      })
      .catch(function (error) {
        alert('error cuy');
      });
  }


  const changeContent = (event) => {
    setKonten(event.target.value);
  };
  const changeDesc = (event) => {
    setDeskripsi(event.target.value);
  };

  return (
    <>
      <NavBar />
      <h1>Content: {location.state.content}</h1>
      <h1>Description: {location.state.description}</h1>
      <form>
        <label for="subject" className='font-bold'>Subject</label><br />
        <input type="text" name='subject' className='bg-slate-500 rounded-full text-white px-2 py-px' onChange={changeContent} placeholder={location.state.content} /><br />
        <label for="description" className='font-bold'>Description</label><br />
        <input type="text" name='description' className='bg-slate-500 rounded-full text-white px-2 py-px' onChange={changeDesc} placeholder={location.state.description} />
      </form>
      <button className='mt-2 rounded-full bg-lime-500 text-white px-2 py-px' onClick={() => handleChange()}>Update</button>
    </>

  )
};

export default DetailTodo