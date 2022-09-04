import React, {useState, useEffect} from 'react'
import Axios from 'axios'
// import {useHistory} from 'react-router-dom'
import '../App.css'

function Music(){
    const [musicList, setMusicList]= useState([])
    // let history = useHistory()

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/categories/3').then((data)=>{
            setMusicList(data.data.products)
        })
    },[])
    console.log(musicList)
    
    return (
        <div>
            {musicList.map((data, key)=>{
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
export default Music