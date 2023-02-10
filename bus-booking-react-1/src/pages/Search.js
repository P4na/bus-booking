import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import pgAxios from "../api/pgAxios"
import StationCard from "../components/StationCard"

export const Search = () => {
    const {el1, el2, eldate} = useParams()

    const [routes, setRoutes] = useState([])
    
    const FIND_ROUTE = "/api/find-route/";
    const searchStation = async () => {
        try {
            await pgAxios
              .get(FIND_ROUTE + `${el1}/${el2}/${eldate}`)
              .then((res) => setRoutes(res.data));
          } catch (error) {
            throw (error);
          }
    }

    useEffect(()=>searchStation, [])

    return (
        <>
            <center>
            <Container fluid className="mt-5">
                {routes.map((el)=>( <StationCard key={el.id} props={el}/> ))}      
            </Container>
            </center>
        </>
    )
} 