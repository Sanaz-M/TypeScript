import { useState, useEffect } from "react"
import Song from "../interfaces/song"
import { Col, Container, Row, Form, Card } from 'react-bootstrap'
// import {Link} from 'react-router-dom'
import SingleAlbum from "./SingleAlbum"

const Homepage = () => {
  const [songs, setSongs] = useState<Song[]>([])
  const [query, setQuery] = useState<string>('queen')

  useEffect(() => {
    getSongs()
  }, [query])


  const getSongs = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
        {
          headers: {
            "Content-type": 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzgzNzAxNjUsImV4cCI6MTYzOTU3OTc2NX0.H09J1-VpXgzcTLnXMrGo9V3_Cs0F17lHLu5-BFHJMBs"
          }
        }
      )
    
      if (response.ok) {

        let data  = await response.json()
        setSongs(data.data)

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
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Search</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Row>
                        {
                            songs.length > 0 && songs.map((song) => (
                              <Col md={3}>
                                <SingleAlbum song={song} />
                               </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
  )
}

export default Homepage