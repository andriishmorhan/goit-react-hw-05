import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom"

export default function MovieDetailsPage() {

const { movieId } = useParams();
    const [casts, setCasts] = useState([]);
    
    

    useEffect(() => {

        async function getCastsData() {
            try {
                const response = await getCredits(movieId)
                setCasts(response)
            } catch (error) {
                
            }
        }
        getCastsData();
    }, [movieId])

    return (
        <div>
            <b>Welcome to details about movies!</b>


            <ul>
                <li>
                    <NavLink>
                        Go back
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        Casts
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        Reviews
                    </NavLink>
                </li>
            </ul>

            <Outlet />

        </div>
    );
}