import React from 'react';
import './Images.css'

const Images= ({items,  setSelectedImg}) => {
 return(
  <div className = "img-grid">
 {
    items && items.map( item => (
     <div className="img-wrap" key={item.id}
          onClick={()=> setSelectedImg(item.urls.regular)}
     >
      <img src={item.urls.thumb} alt="fetchedimage" />
      </div>
    ))}
  
  </div>
 )
}

export default Images;