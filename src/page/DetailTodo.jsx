import React,{useState,useEffect} from 'react';
import axios from "axios";
import {useLocation} from 'react-router-dom';

const DetailTodo = ({id,content,description}) => {
    const location = useLocation();
    // const [subject,setSubject]=useState('');
    // const [deskripsi,setDeskripsi]=useState('');
    const [wadah, setWadah]=useState([]);


    
//     const handleChange=() => {
//         var axios = require('axios');
// var data = JSON.stringify({
//   'content': subject,
//   'deskripsi':deskripsi,
// });

// // pakek slash

// var config = {
//   method: 'post',
//   url: `https://api.todoist.com/rest/v1/tasks/${location.state.id}`,
//   headers: { 
//     'Authorization': 'Bearer 3d1d8b400ac7b81b81fc3369403005779dca728a', 
//     'Content-Type': 'application/json', 
//     'Cookie': 'csrf=c66f6c62c9a34cf8a5008fda8a6fcf55'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(response.data);
// })
// .catch(function (error) {
//   console.log(error);
// });

//     };

//     const handleSubject = (e) => {
//         setSubject(e.target.value);
//       };
//     const handleDescription = (e) => {
//         setDeskripsi(e.target.value);
//       };




const handleChange =()=>{
var data = JSON.stringify({
  "content": 'bastard always here'
});

var config = {
  method: 'post',
  url: 'https://api.todoist.com/rest/v1/tasks/6149983303',
  headers: { 
    'Authorization': 'Bearer 3d1d8b400ac7b81b81fc3369403005779dca728a', 
    'Content-Type': 'application/json', 
  },
  data : data
};

axios(config)
.then(function (response) {
  setWadah(response.data);
})
.catch(function (error) {
  alert('error cuy');
});
}

const handleSubject =(event)=> {
  event.preventDefault();
  setWadah(event.target.value);
  console.log(wadah);
};



  return (
    <>
    <form onSubmit={()=>handleChange()}>
    <label for="subject">Subject</label>
    <input className='bg-navy-600 rounded-full'type="text" id="subject" name="Subject" placeholder={location.state.content}  onChange={(event) => handleSubject(event.target.value)}/>

    {/* <label for="description">description</label>
    <input type="text" id="description" name="description" placeholder={location.state.description} onChange={(value) => handleDescription(value)}/> */}

    <button type="submit">perbarui data</button>
    </form>
    </>
    
  )
};

export default DetailTodo