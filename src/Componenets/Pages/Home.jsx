import React from 'react';
import "../Styles/Home.css"
import { Navlink } from "react-router-dom"
function Home() {
    return (
        <div className="wrapper">
        <div className="Home">
       <div className="nav">
           <div className="content">
               <div className="innerContent">
            
                   <i class="fa fa-search" aria-hidden="true"></i>
               <input type="text" name="" placeholder="Search Tech semester" id="" />
                 
               </div>
               <div className="innerContent">
                   <div className="inner">
                    
                       <i class="fa fa-home" aria-hidden="true"></i>
                   <span>Home</span>
                    
   
               </div>
               </div>
               <div className="innerContent">
                   <div className="inner">
                   <i class="fa fa-play-circle" aria-hidden="true"></i>
                   Media
              </div>
               </div>
               <div className="innerContent">
                   <div className="inner">
                   <i class="fa fa-bell" aria-hidden="true"></i>
                   notification
              </div>
               </div>
               <div className="innerContent">
               <i class="fa fa-user-circle" aria-hidden="true"></i>
                   <button>Ask Question</button>
               </div>
           </div>
       </div>
     
 </div>;

   </div>
 
    )
    }

    export default Home;
