
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../book.css'

const Book= ()=>
{
   async function data(){
       let url=await axios.get("http://localhost:4000/book");
       console.log(url.data);
       card=url.data.map(x=>(
           <div className="card" key={x.id}>
               <div className="card-header"  >Name:{x.name}</div>
               <div className="card-body" ><img className="img" src={x.image}/></div>
               <div className="card-author">Author:{x.author}</div>
               <div className="card-footer">price:{x.price}</div>

           </div>
       ))
       setCard(card)
   }
   useEffect(data,[])
      
   
   let [card,setCard]=useState();
   return(
       <div>
           {card}
       </div>
   )
}

export default Book