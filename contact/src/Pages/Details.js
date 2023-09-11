import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const params = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/persons/${params.personId}`)
      .then((res) => {
        setPerson(res.data);
      })
      .catch((err) => {
        alert("hataa");
      });
  }, []);

  if (person === null) return null;
  return (
    <div>
      <Header />
      <div className="card container my-5">
        <div className="card-header text-center bg-primary text-light  ">
          KİŞİ BİLGİSİ
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>ADI:</b> {person.firstName.toUpperCase()}
          </li>
          <li className="list-group-item">
            <b>SOYADI:</b> {person.lastName.toUpperCase()}
          </li>
          <li className="list-group-item">
            <b>NO:</b> {person.phoneNumber.toUpperCase()}
          </li>
        </ul>
        
      </div>
      <div className="d-flex justify-content-center">
      <Link type="button" class="btn btn-danger" to={"/"}>
          GERİ
        </Link>
      </div>
    </div>
  );
};

export default Details;
