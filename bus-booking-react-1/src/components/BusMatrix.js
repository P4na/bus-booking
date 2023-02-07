import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import pgAxios from "../api/pgAxios"

export const BusMatrix = () =>{
    const ROUTE_API = '/api/find/station/'
    const BUS_API = '/api/find/seats/'

    const {id} = useParams()



    const [seats,setSeats] = useState([ ])
    const [rows, setRows] = useState(1)
    
    const searchRoute = async () => {
        try {
        
            await pgAxios.get(BUS_API+ `${id}`).then((res)=> setSeats(res.data))

            
        } catch (error) {
            throw error 
        }
    }

    
    useEffect(()=>{searchRoute()},[])



    return (

        <>
        <h1>Matrix</h1>
        <h3>Select a seat</h3>
        {seats.map((el)=>(
            <>
            <input key={el.id} type={"checkbox"}/> 
            </>
        ))}
        </>
    )
}