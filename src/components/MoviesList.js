import React from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap'
import Paginations from './Paginations'

const MoviesList = ({movies , getAllPages , pageCount}) => {
  return (
    <Row className='mt-3'>
        {
            movies.map((mov)=>{
                return(<CardMovie key={mov.id} mov={mov} />)
            })
        } 
         <Paginations getAllPages={getAllPages} pageCount={pageCount}/>
    </Row>
  )
}

export default MoviesList