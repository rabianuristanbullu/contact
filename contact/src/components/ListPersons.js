import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListPersons = ({ persons ,didUpdate, setDidUpdate}) => {

    const deletedPerson=(id)=>{
        if(window.confirm("SİLMEK İSTEDİĞİNİZE EMİN MİSİNİZ?")===true){
            axios.delete(`http://localhost:3004/persons/${id}`)
            .then((res)=>{
                setDidUpdate(!didUpdate)
            })
            .catch((err)=>{
                alert("hataa")
            })
        }
    }
    
  return (
    <div className="container my-5">
      <div >
        <Link type="button" class="btn btn-info" to={"/add-person"}>
          KİŞİ EKLE
        </Link>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">SIRA NO</th>
            <th scope="col">ADI</th>
            <th scope="col">SOYADI</th>
            <th scope="col">NO</th>
            <th scope="col">İŞLEMLER</th>
          </tr>
        </thead>
        <tbody>
          <>
            {persons.map((person, index) => (
              <tr key={person.id}>
                <th scope="row">{index + 1}</th>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.phoneNumber}</td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-danger" onClick={()=>{deletedPerson(person.id)}}>
                      SİL
                    </button>
                    <Link type="button" class="btn btn-primary" to={`/edit-person/${person.id}`}>
                      GÜNCELLE
                    </Link>
                    <Link type="button" class="btn btn-outline-info" to={`/details-person/${person.id}`}>
                      DETAY...
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default ListPersons;
