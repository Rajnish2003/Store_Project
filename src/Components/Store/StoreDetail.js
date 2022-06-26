import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const StoreDetail = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const [checked, setchecked] = useState(false);
  const history=useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/stores/${id}`)
        .then((res) => res.data).then(data => setInputs(data.store));
    };
    fetchHandler();
  }, [id]);

  const sendRequest= async()=>{
    await axios.put(`http://localhost:5000/stores/${id}`,{
      name: String(inputs.name),
      price: String(inputs.price),
      quantity: String(inputs.quantity),
      discount: String(inputs.discount),
      image: String(inputs.image),
      available: Boolean(checked)
    }).then(res=>res.data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=>history("/stores"))
  }
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div>
      {inputs &&
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

            <Button variant='contained' type='submit'>UPDATE PRODUCT DETAILS</Button>
          </Box>
        </form>
      }
    </div>
  )
}

export default StoreDetail;