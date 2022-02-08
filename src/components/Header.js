import React, {useState} from 'react';


const Header = ({text}) => {
    const firstchar = text.slice(0,1).toUpperCase();
    const remain = text.slice(1)
    


    return <div className = 'red-btn-container'>
        <h1><span  className = 'blue-btn'>{firstchar}</span>
        <span>{ remain}</span></h1> 
    </div>;
};

export default Header;
