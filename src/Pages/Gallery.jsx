import React, { useState } from 'react';
import img1 from "../assets/g1.jpg"
import img2 from "../assets/g2.jpg"
import img3 from "../assets/g3.jpg"
import img4 from "../assets/g4.jpg"
import img5 from "../assets/g5.jpg"
import img6 from "../assets/g6.jpg"
import img7 from "../assets/g7.jpg"
import img8 from "../assets/g8.jpg"
import img9 from "../assets/g9.jpg"
import img10 from "../assets/g10.jpg"
import img11 from "../assets/g11.jpg"
import img12 from "../assets/g12.jpg"
import img13 from "../assets/g13.jpg"
import img14 from "../assets/g14.jpg"
import img15 from "../assets/g15.jpg"
import img16 from "../assets/g16.jpg"
import img17 from "../assets/g17.jpg"
import img18 from "../assets/g18.jpg"
import img19 from "../assets/g19.jpg"
import img20 from "../assets/g20.jpg"
import { IoMdClose } from "react-icons/io";



const Gallery = () => {

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
            imgsrc:img6,
        },
        {
            id:7,
            imgsrc:img7,
        },
        {
            id:8,
            imgsrc:img8,
        },
        {
            id:9,
            imgsrc:img9,
        },
        {
            id:10,
            imgsrc:img10,
        },
        {
            id:11,
            imgsrc:img11,
        },
        {
            id:12,
            imgsrc:img12,
        },
        {
            id:13,
            imgsrc:img13,
        },
        {
            id:14,
            imgsrc:img14,
        },
        {
            id:15,
            imgsrc:img15,
        },
        {
            id:16,
            imgsrc:img16,
        },
        {
            id:17,
            imgsrc:img17,
        },
        {
            id:18,
            imgsrc:img18,
        },
        {
            id:19,
            imgsrc:img19,
        },
        {
            id:20,
            imgsrc:img20,
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
      <h1>Image Gallery</h1>
      <div  className = {model ? 'model open' : 'model'}>
      <img src={tempimgsrc}/>
      <IoMdClose className='svg' onClick={()=> setModel(false)}/>
      </div>
      <div className='gallery'>
      {imageData.map((item,index)=>{
        return(
            <div className='pics' key={index} onClick={()=>getImg(item.imgsrc)}>
                <img src={item.imgsrc}/>
            </div>
        )
        
      })}

      </div>

    </>
  )
}

export default Gallery
