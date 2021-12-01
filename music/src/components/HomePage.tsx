import { useState, useEffect } from "react"
import Song from "../interfaces/song"
import { Col, Container, Row } from 'react-bootstrap'
// import {Link} from 'react-router-dom'
// import SingleAlbum from "./SingleAlbum"
import Album from '../interfaces/album'

const Homepage = () => {
  const [songs, setSongs] = useState<Song[]>([])
  const [album, setAlbum] = useState<Album[]>([])

  useEffect(() => {
    getSongs()
  }, [])


  const getSongs = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen",
        {
          headers: {
            "Content-type": 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzgzNzAxNjUsImV4cCI6MTYzOTU3OTc2NX0.H09J1-VpXgzcTLnXMrGo9V3_Cs0F17lHLu5-BFHJMBs"
          }
        }
      )
      console.log(response)
      if (response.ok) {
        let data = await response.json()
        setSongs(data.data)
        setAlbum(data.album)

      } else {
        console.log("fetching error")
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
            <Row>
                <Col md={8}>
                    <h1>Music Search Engine</h1>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Row>
                        {
                            songs.length > 0 && songs.map((song) => (
                               <img src={song.album.cover_medium} />
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
  )
}

export default Homepage