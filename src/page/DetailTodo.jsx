import React,{useState} from 'react';
import axios from "axios";
import {useLocation} from 'react-router-dom';

const DetailTodo = ({id,content,description}) => {
    const location = useLocation()
    const [subject,setSubject]=useState('')
    const [deskripsi,setDeskripsi]=useState('')


    const handleChange=() => {
        var axios = require('axios');
var data = JSON.stringify({
  'content': subject,
  'deskripsi':deskripsi,
});

var config = {
  method: 'post',
  url: `https://api.todoist.com/rest/v1/tasks/${location.state.id}`,
  headers: { 
    'Authorization': 'Bearer 3d1d8b400ac7b81b81fc3369403005779dca728a', 
    'Content-Type': 'application/json', 
    'Cookie': 'csrf=c66f6c62c9a34cf8a5008fda8a6fcf55'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});

    };

    const handleSubject = (e) => {
        setSubject(e.target.value);
      };
    const handleDescription = (e) => {
        setDeskripsi(e.target.value);
      };

  return (
    <>
    <form>
    <label for="subject">Subject</label>
    <input className='bg-navy-600 rounded-full'type="text" id="subject" name="Subject" placeholder={location.state.content}  onChange={(value) => handleSubject(value)}/>

    <label for="description">description</label>
    <input type="text" id="description" name="description" placeholder={location.state.description} onChange={(value) => handleDescription(value)}/>

    <input type="submit" value="Perbarui data" onClick={()=>handleChange()}/>
    </form>
    </>
    
  )
}

export default DetailTodo