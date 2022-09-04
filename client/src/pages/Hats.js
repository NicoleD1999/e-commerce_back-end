import React, {useState, useEffect} from 'react'
import Axios from 'axios'
// import {useHistory} from 'react-router-dom'
import '../App.css'

function Hats(){
    const [hatsList, setHatsList]= useState([])
    // let history = useHistory()

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/categories/4').then((data)=>{
            setHatsList(data.data.products)
        })
    },[])
    console.log(hatsList)
    
    return (
        <div>
            {hatsList.map((data, key)=>{
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
export default Hats
