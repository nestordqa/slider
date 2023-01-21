import React, {useState} from 'react';
import { Card } from './Card';
import { images } from "../data/images";
import '../styles/slider.css';

export const Slider = () => {
    const [img, setImg] = useState(0);
    const next = ()=>{
        if(images.length-1 === img){
            setImg(0);
            return;
        }
        setImg(img+1);
    }
    const back = ()=>{
        if(img === 0){
            setImg(images.length-1);
            return;
        }
        setImg(img-1);
    }
  return (
    <>
    <div className='slider'>
        <div onClick={()=>back()} className='arrowBack'>
            <div className='arrow'>
                {'<='}
            </div>
        </div>
        {images.map((image, index)=>{
            return(<Card 
                img={image} 
                active={img === index ? true : false} 
                key={image.name+index}/>)
        })}
        <div onClick={()=>next()} className='arrowNext'>
            <div className='arrow'>
                {'=>'}
            </div>
        </div>
    </div>
    </>
  )
}
