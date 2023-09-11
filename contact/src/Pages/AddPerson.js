import React, { useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddPerson = () => {
    const[firstName,setFirstName]=useState("")
    const[lastName,setLastNAme]=useState("")
    const[number,setNumber]=useState("")
   
    const navigate=useNavigate()

    const handleSubmit=(event)=>{
        event.preventDefault()
        // VALİDATİON

        if(firstName===""||lastName===""||number===""){
            alert("BÜTÜN ALANLAR ZORUNLUDUR")
            return
        }
        const tempArray={
            id: String(new Date().getTime()),
            firstName: firstName,
            lastName :lastName,
            phoneNumber: number
        }

        axios.post("http://localhost:3004/persons",tempArray)
        .then((res)=>{
            navigate("/")
        })
        .catch((err)=>{
            alert("Hataaa")
        })

    }

  return (
    <div>
      <Header />
      <div className="container my-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Adı
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="ör: Zeynep"
              value={firstName}
              onChange={(event)=>setFirstName(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Soyadı
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="ör: Yılmaz"
              value={lastName}
              onChange={(event)=>setLastNAme(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="personNumber" className="form-label">
              NO
            </label>
            <input
              type="tel"
              className="form-control"
              id="personNumber"
              placeholder="ör: +905423694568"
              value={number}
              onChange={(event)=>setNumber(event.target.value)}
            />
          </div>
         
          <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary w-50">EKLE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPerson;
