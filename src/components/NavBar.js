import React from 'react'
import logo from '../images/logo.png'
import {Col, Container, Row} from 'react-bootstrap';


const NavBar = ({search}) => {
    const onSearch = (word) => {
            search(word)
    }
  return (
    <div className='nav-style w-100'>
        <Container>
            <Row className='pt-2'>
                <Col xs="2" lg="1" >
                <a href='/'>
                    <img className='logo' alt='fds' src={logo}/>
                </a>
                </Col>
                <Col className='d-flex align-items-center' xs="10" lg="11" >
                <div className='search w-100'>
                <i class="fa fa-search"></i>
                <input  onChange={(e) => onSearch(e.target.value)} className='form-control' placeholder='بحث'></input>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default NavBar