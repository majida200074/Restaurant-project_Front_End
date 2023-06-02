import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Restaurant from "../Restaurant";

export default function AddRestaurant() {
    let navigate = useNavigate();

    const [restaurant, setRestaurant] = useState({
      nom: "",
      
   
    });
  
    const { nom } = restaurant;
  
    const onInputChange = (e) => {
      setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/restaurants/save", Restaurant);
      navigate("/restaurant");
    };
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Add restaurant</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>
             
              
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">
                  Nom serie
                </label>
                <input
                  type={"text"}
                  className="form-control"
                 
                  name="nom"
                  value={nom}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Save
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/serie">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
}
