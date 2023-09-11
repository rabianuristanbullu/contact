import React, { useEffect, useState } from "react";


import Header from "../components/Header";
import axios from "axios";
import ListPersons from "../components/ListPersons";

const Home = () => {
    const[persons,setPersons]=useState(null)
    const [didUpdate,setDidUpdate]=useState(false)

    useEffect(()=>{
        axios.get("http://localhost:3004/persons")
        .then((res)=>{
            setPersons(res.data)
        })
        .catch((err)=>{
            alert("hataaa")
        })
    },[didUpdate])

    if(persons===null)return null;

 return(
    <div>
    <Header/>
    <ListPersons persons={persons} didUpdate={didUpdate} setDidUpdate={setDidUpdate}/>
</div>
 )
}

export default Home