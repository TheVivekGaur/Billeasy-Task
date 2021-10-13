import { useState,useEffect } from 'react';
import axios from 'axios';
import Images from './Images';

function App() {
  const [imageList, setImageList] = useState([]);

  useEffect(()=>{
 fetchImageList()
  },[])

  const  fetchImageList = async () =>{
        try{  
       const response = await axios.get(' http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
        // console.log(response.data);
        const imageData = await response.data;
        setImageList(imageData)
        }catch(err){
             console.log(err);
        }
        }
  return (
    <div>
    <Images  items = {imageList}/>
    </div>
  )

}

export default App;
