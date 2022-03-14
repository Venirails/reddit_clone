

import React from "react";
import { useEffect, useState } from "react";
import axios from "../../utils/ajax_helper";


const Listpost = () => {
  let [allPosts, setallPosts] = useState([]);
  const [message, setMessage] = useState(null);
  const br = `\n`;

  useEffect(async () => {
    axios
      .get("/listpost")
      .then((res) => {
        if (res.data.length == 0) {
          setMessage(
            "Sorry !! We don't have any products show ,Please ask admin to add products"
          );
        }
        setallPosts(res.data);
      })
      
  }, []);

    return (
      
<div class="container-fluid pb-3">
<div class="row">
    <div class="col-12 col-md-8">
    {allPosts &&
                    allPosts.map((post) => {
                      return (
                        <div>

                        <div class="bg-dark border rounded-3 col px-md-5 py-md-4"> <font color="white" size="4"> <img class="rounded-circle" alt="10x10" height="25" width= "25" src="https://i.ibb.co/qnM9gtV/download-21.jpg"
          data-holder-rendered="true"/><b>&nbsp;&nbsp;Community</b></font><br /><br /> <font color="white" size="5"><b>{post.title}</b></font> <br /><br />
          <font color="white" size="2">{post.content.replace(/<(?:.|\n)*?>/gm, '').substring(0,1000)+ "..." }</font>
          
          <br /><br /><br />
                        </div>
                     <br />
                     
                     </div>
                      
                      );
                    })}   
     
    
    </div>
    
    <div class="col-6 col-md-4">
    <div class="card text-white bg-dark mb-3 border-light"
>  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
  <ul class="card-text">
    <li class="card-text">Coming soon</li>
    <li class="card-text">Coming soon</li>
    <li class="card-text">Coming soon</li>
  </ul>
  </div>
</div>    </div>
  </div>
      
      

      
</div>

    )

}


export default Listpost;