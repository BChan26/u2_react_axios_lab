import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Nav () {

    let navigate = useNavigate()

    return (
        <div className = "nav">
            <Link to= "/Starship">
                <h2>Starship</h2>
            </Link>

            <Link to= "/Planets">
                <h2>Planets</h2>
            </Link>

            <Link to= "/People">
                <h2>People</h2>
            </Link>

            <Link onClick={() => navigate(-1)}><h2>Back</h2></Link>

        </div>)
    }