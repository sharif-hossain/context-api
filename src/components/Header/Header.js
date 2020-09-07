import React from 'react';
import { useState } from 'react';

const Header = (props) => {
   
   const {count,setCount} = props;
//    setCount(count+1);
    return (
        <div>
            <h1>This is Header : {count}</h1>
            <button onClick={()=>setCount('laptop')}>Laptop</button>
            <button onClick={()=>setCount('Mobile')}>Mobile</button>
            <button onClick={()=>setCount('Camera')}>Camera</button>
        </div>
    );
};

export default Header;