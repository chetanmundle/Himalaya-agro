import React from 'react'
import apple from "../assets/fruitBox.jpg";

const Card = () => {
  return (
    <>
      {/* <div className='slider-card'>
        <div  className='slider-card-img'>
             <img src={apple}/>
        </div>


      </div> */}
        
        <div>
            <article class="card">
              <div class="card-img">
                <div class="card-imgs pv delete">
                  <img src={apple} className="fruitbox" />
                </div>
              </div>

              <div class="project-info">
                <div class="flex">
                  <div class="project-title">Ready Made Boxes</div>
                  {/* <span class="tag">type</span> */}
                </div>
                <span class="lighter">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae voluptas ullam aut incidunt minima.
                </span>
              </div>
            </article>
          </div>

    </>
  )
}

export default Card
