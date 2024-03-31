import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';



const Home = () => {
    const[data,setData]=useState([])
    const[search,setSearch]=useState('')

    const searchMovies = async(e)=>{
      try {
        e.preventDefault()
        let url=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=7e543c5d98f9db66d83f81acc2832294`
        let res = await fetch(url)
        let data = await res.json()
        setData(data.results)
      } catch (error) {
        console.log("No Movies Found");
      }
    }

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7e543c5d98f9db66d83f81acc2832294')
        .then(res=>res.json())
        .then(data=>setData(data.results))
    },[])
  return (
    <div>
        {/* NavBar */}
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Netflix</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to='/'>Home</Nav.Link>
            <Nav.Link to={'/TvShow'}>Tv Shows</Nav.Link>
            <Nav.Link to={'/Upcoming'}>Upcoming</Nav.Link>
            <Nav.Link to={'/Latest'}>Latest</Nav.Link>
            <Nav.Link to={'/People'}>People</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={searchMovies}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            <Button type='submit' variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/*  Carousel */}
    <Carousel>
        {
            data && data.map((item)=>{
                return(
                    <div key={item.id}>
                        <header style={{height:'500px'}}> 
                        <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt='' />
                        </header>
                        <p className="legend" >
                        <h1>{item.original_title}</h1>
                        <p>{item.overview}</p>
                        <p>{item.vote_average}⭐</p>
                    </p>
                </div>
                )
            })
        }
    </Carousel>

    {/* Cards */}
    <section style={{display:'flex',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap',gap:'10px'}}>
      {data && data.map((item)=>{
        return(
          <Card key={item.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} />
      <Card.Body>
        <Card.Title>{item.original_title}</Card.Title>
        <Card.Text>
          {item.vote_average}⭐
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
        )
      })
      }
    </section>
    </div>
  )
}

export default Home
