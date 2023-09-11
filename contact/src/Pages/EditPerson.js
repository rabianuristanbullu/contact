import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPerson = () => {
  const params = useParams();
  const [person, setPerson] = useState(null);
  const navigate =useNavigate()

  const[firstName,setFirstName]=useState("")
  const[lastName,setLastName]=useState("")
  const[number,setNumber]=useState("")
  useEffect(() => {
    axios
      .get(`http://localhost:3004/persons/${params.personId}`)
      .then((res) => {
        setPerson(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setNumber(res.data.phoneNumber)
      })
      .catch((err) => {
        alert("hata");
      });
  }, []);
  const handleSubmit=(event)=>{
    event.preventDefault();
    // VALIDATION
    const tempArray={
        id: String(new Date().getTime()),
        firstName: firstName,
        lastName: lastName,
        phoneNumber: number
    }

    axios.put(`http://localhost:3004/persons/${params.personId}`,tempArray)
    .then((res)=>{
        navigate("/")
    })
    .catch((err)=>{
        alert("HATAA")
    })
  }
  if (person === null) return null;
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
            onChange={(event) => setFirstName(event.target.value)}
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
            onChange={(event) => {setLastName(event.target.value)}}
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
            onChange={(event) => setNumber(event.target.value)}
          />
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary w-50">
            GÜNCELLE
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default EditPerson;
