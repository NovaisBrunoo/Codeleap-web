import React from 'react';
import videobg from '../../assets/videobg.mp4';
import './style.css';

function Bgvideo() {
    return (
        <div className="bgVideo">
            <video src={videobg} autoPlay loop muted />
            <div className='infor__title'>
            </div>
        </div>
    )
}

export default Bgvideo;


