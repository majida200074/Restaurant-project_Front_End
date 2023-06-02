import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Restaurant() {
    const [restaurants, setrestaurant] = useState([]);

    const {id}=useParams()
    useEffect(() => {
        loadRestaurant();
        
    }, []); 

    const loadRestaurant =  async () => {
        const result = await axios.get("http://localhost:8080/restaurants/api/restaurants");
        setrestaurant(result.data);
    };

    const deletRestaurant = async (id)=>{
      await axios.delete(`http://localhost:8080/restaurants/delete/${id}`)
      loadRestaurant()
    }
  return (
    <div className='container'>
        <div className='py-4'>  <Link className='btn btn-outline-primary mx-2' to="/addRestaurant">Add restaurant</Link>
</div>
       
        <div className='py-4'>
       
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">nom</th>
      <th scope="col">lattitude</th>
      <th scope="col">longtitude</th>
      <th scope="col">adresse</th>
      <th scope="col">close</th>
      <th scope="col">rank</th>
      <th scope="col">weekend</th>    
      <th scope="col">Action</th> 
    </tr>
  </thead>
  <tbody>  
    {
        restaurants.map((restaurant,index)=>(

            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{restaurant.nom}</td>
            <td>{restaurant.lattitude}</td>
            <td>{restaurant.longtitude}</td>
            <td>{restaurant.adresse}</td>
            <td>{restaurant.close}</td>
            <td>{restaurant.rank}</td>
            <td>{restaurant.weekend}</td>
             <td>
                <Link className='btn btn-primary mx-2' to={`/editrestaurant/${restaurant.id}`}>Edit</Link>
                <button className='btn btn-danger mx-2' onClick={()=>deletRestaurant(restaurant.id)}>Delete</button>
             </td>
         
            
          </tr>
        ))
    }
   
   
  </tbody>
</table>
        </div>
    </div>
  )
}