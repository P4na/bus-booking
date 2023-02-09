import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import pgAxios from "../api/pgAxios"

export const BusMatrix = () => {
    const BUS_API = '/api/find-seats-by-bus/'

    const { id } = useParams()
    const [seats, setSeats] = useState([])
    const [bookedSeats, setBookedSeats] = useState([])

    const GenerateMatrix = () => {
        var columns = 4
        var k = 0
        var lista = []
        for (let i = 0; i < seats.length; i++) {
            if (k === columns) {
                lista.push(<br />)
                k = 0
            }
            k++
            lista.push(<><input id={`${seats[i].id}`} type={"checkbox"} onClick={saveSeat} style={{width:"2.5rem", height:"4rem"}}/></>)
        }
        return lista
    }

    const searchRoute = async () => {
        try {

            await pgAxios.get(BUS_API + `${id}`)
                .then((res) => {
                    setSeats(res.data)
                })
        } catch (error) {
            throw error
        }
    }

    const saveSeat = (e) => {
        let item = bookedSeats
        let thereis = false
        for(let i = 0; i < item.length; i++){
            if(item[i] == e.target.id){
                item[i] = null
                thereis = true
            }
        }
        if(thereis == false){
            item.push(e.target.id)
        }
        let newItem = item.filter(el => {return el!==null})
        localStorage.setItem("bookedSeats", newItem)
    }

    useEffect(() => { searchRoute() }, [])


    return (
        <>
            <h1>Matrix</h1>
            <h3>Select a seat</h3>
            <div style={{border:"", }}>
                <center>
                    <GenerateMatrix />
                </center>
            </div>
        </>
    )

}