import React from 'react'
import pan from '../../Assets/img/Pan.png'
import realzar from '../../Assets/img/realizar.png'
import sarro from '../../Assets/img/sarro.png'
import '.././../Style/Tips.css'

const Tips = () => {
    return (
        <div className="padre">
        <div id="carouselExampleControls " className="carousel slide prueba" data-ride="carousel">
        <div className="carousel-inner prueba">
          <div className="carousel-item active " >
            <img className="d-block w-50" src={pan} alt="First slide"  />
          </div>
          <div className="carousel-item">
       
            <img className="d-block w-50 " src={realzar} alt="Second slide"/>
            
          </div>
          <div className="carousel-item">
        
            <img className="d-block w-50" src={sarro} alt="Third slide"/>
         
          </div>
        </div>

      </div>
      </div>
    )
}

export default Tips