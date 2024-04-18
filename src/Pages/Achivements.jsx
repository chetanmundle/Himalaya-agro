import React, { useState } from 'react';
import img1 from "../assets/certi1.jpg"
import img2 from "../assets/certi2.jpg"
import img3 from "../assets/certi3.jpg"
import img4 from "../assets/certi4.jpg"
import img5 from "../assets/certi5.jpg"
// import img6 from "../assets/certi6.jpg"
// import img7 from "../assets/certi7.jpg"

import { IoMdClose } from "react-icons/io";



const Achivements = () => {

    let imageData =[
        {
            id:1,
            imgsrc:img1,
        },

        {
            id:2,
            imgsrc:img2,
        },

        {
            id:3,
            imgsrc:img3,
        },
        {
            id:4,
            imgsrc:img4,
        },
        {
            id:5,
            imgsrc:img5,
        },
        {
            id:6,
            imgsrc:img5,
        },
      
        
    ]
   const [model,setModel] = useState(false);
   const [tempimgsrc, setTemimgsrc] = useState('');
    const getImg = ( imgsrc)=>{

       setTemimgsrc(imgsrc);
       setModel(true);
    }


  return (
    <>
      <h1  className='gallery-heading'>Achivements</h1>
       
      <div  className = {model ? 'model open' : 'model'}>
      <img src={tempimgsrc}/>
      <IoMdClose className='svg' onClick={()=> setModel(false)}/>
      </div>
      <div className='gallery-section'>
      <div className='gallery-Achivements'>
      {imageData.map((item,index)=>{
        return(
            <div className='pics' key={index} onClick={()=>getImg(item.imgsrc)}>
                <img src={item.imgsrc}/>
            </div>
        )
        
      })}
</div>
      </div>

    </>
  )
}

export default Achivements
