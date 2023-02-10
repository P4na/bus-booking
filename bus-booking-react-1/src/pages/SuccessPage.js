import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import pgAxios from "../api/pgAxios"

export const SuccessPage = () => {
    const { email, route } = useParams()

    const TICKET_ID = "/api/find-ticket-by-route-email/"

    const [tickets, setTickets] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getTicket = async () => {
        try {
            await pgAxios.get(
                TICKET_ID + `${email}/${route}`).then((res)=>
                setTickets(res.data)).then(
                console.log(tickets))
            } catch (error) {
            throw error
            }
        }
        
    useEffect(()=>getTicket, [])

    return (
    <>
        <Container className="mt-5">
            <h2>Biglietto Preso!</h2>
            <h4>Questi sono i dati del biglietto</h4>
            {tickets.map((tick)=>(
            <Row>
                <Col>
                    <p>Email: {tick.email}</p>
                    <p>Nome: {tick.user_name}</p>
                    <p>Cognome: {tick.user_surname}</p>
                </Col>
                <Col>
                    <p>Posto: {tick.seat}</p>
                    <p>Id viaggio: {tick.route}</p>
                </Col>
                <p>---------------------------------</p>
            </Row>
            ))}
        </Container>
    </>)
}