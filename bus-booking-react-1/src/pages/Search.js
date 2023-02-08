import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import pgAxios from "../api/pgAxios"
import StationCard from "../components/StationCard"

export const Search = () => {
    const [routes, setRoutes] = useState([])
    const {el1, el2, eldate} = useParams()
    const FIND_API = "/api/find-route/";

    const searchStation = async () => {
        try {
            await pgAxios
              .get(FIND_API + `${el1}/${el2}/${eldate}`)
              .then((res) => setRoutes(res.data));
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(()=>searchStation, [])

    return (
        <>
        <center>
        <Container fluid>
            {routes.map((el)=>( <StationCard key={el.id} props={el} />))}      
        </Container>
        </center>
        </>
    )
} 