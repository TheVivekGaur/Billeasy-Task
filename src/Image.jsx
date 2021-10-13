import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import './Image.css';

const Image = ({url}) => {
 const [modalIsOpen , setModalIsOpen] = useState(false);
 console.log(url.raw)
 return (
  <span>
  <img src={url.thumb} className="image" alt="first"  />
  </span>
 )
}

export default Image
