import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Homepage = () => {
    const navigate = useNavigate();
    const [todo,setTodo] = useState([]);

    useEffect(() =>{
        getData();
        handleDelete();
    },[]);

    const handleDelete=()=> {
        axios
          .delete("https://jsonplaceholder.typicode.com/posts/1")
          .then((response) => console.log(response.data));
      }

const getData= async()=>{
        
var config = {
    method: 'get',
    url: 'https://api.todoist.com/rest/v1/tasks',
    headers: { 
      'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
    }
  };
  
  await axios(config)
  .then((response)=> {
    console.log(response.data);
    setTodo(response.data);
  })
  .catch((error)=> {
    alert(error);
  });
      };

      const handleDetailPage=(item)=>{
        navigate(`/detail/${item.id}`, {
          state: {
            id:item.id,
            content:item.content,
          },
        });
      }

  return (
    <>
    <NavBar/>
    {todo.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.id}</p>
              <Card id={item.id} content={item.content} detail={()=>handleDetailPage(item)} delete={()=>handleDelete()} />
              </div>
            );
          })}
    </>
  )
}

export default Homepage