import React, {useState, useEffect} from 'react'
import Axios from 'axios'
// import {useHistory} from 'react-router-dom'
import '../App.css'

function Shoes(){
    const [shoeList, setShoeList]= useState([])
    // let history = useHistory()

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/products').then((data)=>{
            setShoeList(data)
            console.log(data)
        })
    },[])
    
    return (
        <div>
            {shoeList.map((val, key)=>{
                return (
                    <div>
                        <h1>
                            {val}
                        </h1>
                    </div>
                )
            })}
        </div>
    )
}
export default Shoes