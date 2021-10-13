import react from 'react';
import Image from './Image';

const Images= ({items}) => {
 console.log(items)
 return(
  <div>
  <h1>Billeasy</h1>
  { 
    items.map((item, index) => (
     <Image key={index}  url={item.urls} />
    ))
  }
  </div>
 )
}

export default Images;