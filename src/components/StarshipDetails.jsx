import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function StarshipDetails () {


let { name } = useParams()

const [starshipName, setStarshipName] = useState('')

useEffect(() => {
let selectedStarship = _____sourceofdata_____.find(
    (starshipName) => starshipName.name === parseInt(name)
)
setStarshipName (selectedStarship)
}, [starshipName, name])

return starshipName ? (
    <div>

        <div>
            <h2>Name: {starshipName.name}</h2>
            <h2>Model: {starshipName.model}</h2>
            <h2>Cost: {starshipName.cost_in_credits}</h2>
        </div>
    
    </div>
) : null;

}