import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//name, price, quantity, available, discount, image
const Addproduct = () => {
  const history=useNavigate();
  const [inputs, setinputs] = useState({
    name: '',
    price: '',
    quantity: '',
    discount: '',
    image: ''
  })

  

  const [checked, setchecked] = useState(false)
  const handleChange = (e) => {
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))

    // console.log(e.target.name,"Value",e.target.value);
  }

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/stores", {
      name: String(inputs.name),
      price: String(inputs.price),
      quantity: String(inputs.quantity),
      discount: String(inputs.discount),
      image: String(inputs.image),
      available: Boolean(checked)
    }).then(res => res.data );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(()=>history('/stores'));
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700} alignContent={'center'} alignSelf="center" marginLeft={'auto'} marginRight={'auto'} marginTop="5px">
        <FormLabel >Name</FormLabel>
        <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name" />
        <FormLabel >Price</FormLabel>
        <TextField value={inputs.price} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="price" />
        <FormLabel >Quantity in Stock</FormLabel>
        <TextField value={inputs.quantity} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="quantity" />
        <FormLabel >Discount</FormLabel>
        <TextField value={inputs.discount} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="discount" />
        <FormLabel >Image URL</FormLabel>
        <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image" />

        <FormControlLabel control={<Checkbox checked={checked} onChange={() => setchecked(!checked)} />} label="Available in Stock" />

        <Button variant='contained' type='submit'>ADD PRODUCT</Button>
      </Box>
    </form>
  )
}

export default Addproduct