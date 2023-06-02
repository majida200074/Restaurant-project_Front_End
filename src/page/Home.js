import React, { useEffect ,useState} from 'react'
import axios from 'axios';

export default function Home() {

    const [villes, setville] = useState([]);
    useEffect(() => {
        loadViles();
        
    }, []); 

    const loadViles =  async () => {
        const result = await axios.get("http://localhost:8080/villes/api/villes");
        setville(result.data);
    };

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
    <th scope="col">id</th>
      <th scope="col">nom</th>
     
      
    </tr>
  </thead>
  <tbody>  
    {
        villes.map((ville,index)=>(

            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{ville.nom}</td>
         
            
          </tr>
        ))
    }
   
  </tbody>
</table>
        </div>
    </div>
  )
}
