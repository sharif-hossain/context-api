import React, { useContext } from 'react';
import { context } from '../../App';

const HomeDetail = (props) => {
   const {name }= props.product;
    return (
        <div>
            <h4>This is grandChild of Home :{}</h4>
            {/* <button onClick={()=>setCount('laptop')}>Laptop</button>
            <button onClick={()=>setCount('Mobile')}>Mobile</button>
            <button onClick={()=>setCount('Camera')}>Camera</button> */}
            <h5>Selected product : {name}</h5>

        </div>
    );
};

export default HomeDetail;