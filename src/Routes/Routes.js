import React from 'react';
import Home from './../components/Home/Home';
import DetailProduct from './../components/Detail_Product/Detail_Product';
import Product from './../components/Product/Product';



const routes = [
   
    {
        path : '/',
        exact : true,
        main : ({match , location}) =><Home match={match} location = {location}/>        

    },  
    {
        path : '/Product',
        exact : false,
        main : ({match , location})=><Product match={match} location = {location}/>


    }, 
    {
        path : '/DetailProduct/:slug.:id.html',
        exact : false,
        main : ({match , location})=><DetailProduct match={match} location = {location}/>


    }
   
]
export default routes;