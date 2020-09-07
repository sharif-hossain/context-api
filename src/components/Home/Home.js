import React from 'react';
import HomeDetail from '../HomeDetail/HomeDetail';
import { useContext } from 'react';
import { context } from '../../App';
import { useState } from 'react';
import { useEffect } from 'react';

 const allProducts = [
     {name:'hp', category:'laptop'},{name:'Dell', category:'laptop'},{name:'Asus', category:'laptop'},
     {name:'Samsung', category:'mobile'},{name:'Nokia', category:'mobile'},{name:'Apple', category:'mobile'},
     {name:'canon', category:'camera'},{name:'Sony', category:'camera'},{name:'Nikkon', category:'camera'},
    ]

const Home = () => {
   const [category ]= useContext(context);
   const [products, setProducts] = useState([]);
   useEffect(()=>{
       console.log({category})
        const matchedProducts = allProducts.filter(pd => pd.category === category.toLowerCase());
        setProducts(matchedProducts);
   },[category])
    return (
        <div>
            <h1>This is Home : {category}</h1>
            {
                products.map(pd => <HomeDetail product ={pd}></HomeDetail>)
            }
        </div>
    );
};

export default Home;