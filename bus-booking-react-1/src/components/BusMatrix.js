import { useEffect } from "react"
import { useParams } from "react-router-dom"
import pgAxios from "../api/pgAxios"

export const BusMatrix = () =>{

    const ROUTE_API = '/api/find/station/'
    const BUS_API = ''

    const {id} = useParams()

    
    const searchRoute = async () => {
        try {
            await pgAxios
            .get(ROUTE_API + `${id}`).then((res)=> console.log(res.data))
        } catch (error) {
            throw error 
        }
    }
    
    useEffect(()=>{searchRoute()},[])


    return (

        <>
        <h1>Matrix</h1>
        <h3>Select a seat</h3>
        
        </>
    )
}