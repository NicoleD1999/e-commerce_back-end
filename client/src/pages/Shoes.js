import React, {useState, useEffect} from 'react'
import Axios from 'axios'
// import {useHistory} from 'react-router-dom'
import '../App.css'

function Shoes(){
    const [shoeList, setShoeList]= useState([])
    // let history = useHistory()

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/categories/5').then((data)=>{
            setShoeList(data.data.products)
        })
    },[])
    console.log(shoeList)
    
    return (
        <div>
            {shoeList.map((data, key)=>{
                return (
                    <div>
                        <h1>
                            {data.product_name}
                        </h1>
                    </div>
                )
            })}
        </div>
    )
}
export default Shoes