import React from 'react';
import './backdrop.css';

function backdrop(props) {
    return (
        <div>
        <div className="back-drop" onClick={props.clickBackDrop}  />
        </div>
        
    )
}

export default backdrop
