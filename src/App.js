  import { useState,useEffect } from 'react';
  import axios from 'axios';
  import Images from './Components/Images/Images';
  import Modal from './Components/Modal/Modal';

  function App() {
    const [imageList, setImageList] = useState([]);
    const [ selectedImg, setSelectedImg] = useState(null);

    useEffect(()=>{
  fetchImageList()
    },[])

    const  fetchImageList = async () =>{
          try{  
        const response = await axios.get(' http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
          const imageData = await response.data;
          setImageList(imageData)
          }catch(err){
              console.log(err);
          }
          }
      return (
        <div>
        <Images 
         items = {imageList}
        setSelectedImg={setSelectedImg} 
        />
        
      { selectedImg && <Modal  
        selectedImg={selectedImg} 
      setSelectedImg={setSelectedImg} />
      }
        </div>
      )

  }

export default App;
