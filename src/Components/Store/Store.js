import React from 'react'
import { Button } from '@mui/material';
import "./Store.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Store = (props) => {
  const history=useNavigate();
  const { _id, name, price, quantity, discount, image } = props.store;
  const deleteHandler= async()=>{
   await axios.delete(`http://localhost:5000/stores/${_id}`)
   .then(res=>res.data)
   .then(()=>history("/"))
   .then(()=>history("/stores"));
  }
  return <div className='card'>
    <div className="image">
      <img src={image} alt={name} /></div>
    <h4>{name}</h4>
    <h2>{price}</h2>
    <h3>Discount: {discount}</h3>
    <p>Stock: {quantity}</p>
    <Button LinkComponent={Link} to={`/stores/${_id}`}>Update</Button>
    <Button onClick={deleteHandler}>Delete</Button>
  </div>
}

export default Store;