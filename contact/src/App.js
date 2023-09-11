import React from "react";

import { BrowserRouter,Route,Routes,route } from "react-router-dom";
import Home from "./Pages/Home";
import AddPerson from "./Pages/AddPerson";
import Details from "./Pages/Details";
import EditPerson from "./Pages/EditPerson";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add-person" element={<AddPerson/>} />
      <Route path="/details-person/:personId" element={<Details/>} />
      <Route path="/edit-person/:personId" element={<EditPerson/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
