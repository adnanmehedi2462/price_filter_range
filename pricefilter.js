import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { domain } from '../env'

export const Defaultsearch = () => {
  const [allProduct,setAllproduct]=useState([])
  const[loading,setLoading]=useState(true)

  const getallproductdata = async () => {
    await Axios({
      method: "get",
      url:`${domain}/api/product/`
    }).then(
        response => {
          setAllproduct(response.data)
            console.log(response.data,"all data .....................")
            setLoading(false)
        }
    )
}
useEffect(() => {
  getallproductdata()
}, [])



const [selling_price,setPrice]=useState(80)
const handleInput = (e)=>{
  setPrice( e.target.value );
}









  return (
    <>
    <form>
  <input type="range" min="80" max="20000" onInput={ handleInput } />
  <h1>{selling_price}</h1>
</form>
{/* {allProduct && allProduct.map((x)=>(
  <><h1>{x.title} and {x.selling_price}</h1></>
))} */}

{ allProduct.filter( product => { 
  return product.selling_price > parseInt(selling_price, 10) }).map( product => {
        return <p key={product.id}>{ product.title } | { product.selling_price } &euro; </p>
      })}



    </>
  )
}
