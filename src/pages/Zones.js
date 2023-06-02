import React, { useEffect ,useState} from 'react'
import axios from 'axios';

export default function Zones() {
    const [zones, setzone] = useState([]);
    useEffect(() => {
        loadZones();
        
    }, []); 

    const loadZones =  async () => {
        const result = await axios.get("http://localhost:8080/zones/api/zones");
        setzone(result.data);
    };

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">nom</th>

      <th scope="col">ville id</th>
      
    </tr>
  </thead>
  <tbody>  
    {
        zones.map((zone,index)=>(

            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{zone.nom}</td>
            <td>{zone.villes_id}</td>
           
            
          </tr>
        ))
    }
   
   
  </tbody>
</table>
        </div>
    </div>
  )
}
