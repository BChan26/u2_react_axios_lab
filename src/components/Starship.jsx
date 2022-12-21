import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'
import { useNavigate } from 'react-router-dom'

const Starship = () => {



//API Call and Passing Data On
const [starship, setStarship] = useState([])
useEffect(() => {
    const getStarship = async () => {
        const response = await axios.get(`${BASE_URL}/starships`)
        console.log(response.data.results)
        setStarship(response.data.results)
    }
getStarship()
}, [])



//



//for onclick, navigates to unique page based on ID
let navigate = useNavigate()
 const showStarship = (starship) => {navigate (`${starship.name}`)}




//Mapping Data On Screen
    if (!starship) {
        return <h2>Loading Please Wait - Starship</h2>
    } 
    
    else {
    return (
        <div className="grid">
            {
                starship.map((value)=> (
                    <div key={value.created}
                        className="starship"
                        onClick={() => showStarship(value)}>
    {/* This onclick above will jump to a new URL based on name */}
                    <h3>Starship: {value.name}</h3>

                    </div>
                ))
            }
        </div>
    )}







}
export default Starship