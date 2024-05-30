import React, { useState,useEffect } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'
const Add = ({url}) => {

  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"

  });
  
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name',data.name)
    formData.append('description',data.description)
    formData.append('price',Number(data.price))
    formData.append('category',data.category)
    formData.append('image',image)
    const response = await axios.post(`${url}/api/food/add`,formData);
    if (response.data.success){
      setData({
          name:"",
          description:"",
          price:"",
          category:"Salad"
        })
      setImage(false);
      toast.success(response.data.message)
    }
    else {
      toast.error(response.data.message)
    }
      
  } 
  


  // update
  useEffect(() => {
console.log(data);
  },[data])
  return (
    <div className='add'>

    <form action="" className="flex-col" onSubmit={onSubmitHandler}>
      <div className="add-img-upload flex-col">
        <p>Upload Image</p>
        <label htmlFor="image">
          <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />    {/* pics  upload */}
        </label>
        <input onChange={(event)=>setImage(event.target.files[0])} type="file" id="image" hidden required />
      </div>
          <div className="add-product-name flex-col" >
            <p>Product name</p>
            <input onChange={onChangeHandler} name="name" value={data.name} type='text' placeholder='Type here' required  />
          </div>
          <div className="add-product-description flex-col">
            <p>Product description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows='6' placeholder='Write content here'></textarea>
          </div>
          <div className="add-category-price">
            <div className="add-category flex-col">
              <p>Product Category</p>
              <select  onChange={onChangeHandler} value={data.category} name="category">
              
                <option value="Sushi">Sushi</option>
                <option value="Dessert">Dessert</option>
                <option value="Donburi">Donburi</option>
                <option value="Sashimi">Sashimi</option>
                <option value="Ramen">Ramen</option>
                <option value="Appertizer">Appertizer</option>
              </select>
      
            </div>
            <div className="add-price flex-col">
              <p>Price</p>
              <input  onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20' required />
            </div>
          </div>
<button type='submit' className='add-btn'>Add</button>
    </form>

    </div>
  )
}

export default Add