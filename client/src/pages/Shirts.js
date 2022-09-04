import React, {useState, useEffect} from 'react'
import Axios from 'axios'
// import {useHistory} from 'react-router-dom'
import '../App.css'

function Shirts(){
    const [shirtsList, setShirtsList]= useState([])
    // let history = useHistory()

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/categories/1').then((data)=>{
            setShirtsList(data.data.products)
        })
    },[])
    console.log(shirtsList)
    
    return (
        <div>
            {shirtsList.map((data, key)=>{
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
export default Shirts