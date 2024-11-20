import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Electronic() {
    const [state,setstate] = useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/electronics")
        .then((res)=>{ 
            return res.json()
            .then((data)=>{
                setstate(data)
            })
        })
    })
  return (
    <div>
       {
        state.map((el,i)=>{
            return <><Link to ={`/productdetail/${el.id}`}>
{el.title}</Link> <br />
</>
        })
       }
    </div>
  )
}
