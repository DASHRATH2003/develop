import React, { forwardRef, useEffect } from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import InquiryAndMapComponent from './InquiryForm/InquiryForm';


const Conatct = forwardRef((props,ref) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='contact h-[195vh]  md:h-[100vh]' ref={ref}>
    
    
    <InquiryAndMapComponent/>
    
    </div>
  )
})

export default Conatct