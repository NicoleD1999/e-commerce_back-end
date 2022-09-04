import React, {useState, useEffect} from 'react'
import Axios from 'axios'
// import {useHistory} from 'react-router-dom'
import '../App.css'

function Shorts(){
    const [shortsList, setShortsList]= useState([])
    // let history = useHistory()

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/categories/2').then((data)=>{
            setShortsList(data.data.products)
        })
    },[])
    console.log(shortsList)
    
    return (
        <div>
            {shortsList.map((data, key)=>{
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
export default Shorts