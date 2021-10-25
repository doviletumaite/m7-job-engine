import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Job({ data }) {
  // console.log("heyyy card job")
    return (
        <Row >
       
            <div>
 
               <Card className="m-5">
               <Card.Header as="h5"> 
               {data.title}</Card.Header>
               <Card.Body>
               <Link to={`/${data.company_name}`}> <Card.Title>{data.company_name}</Card.Title></Link>
               
                 <Link to={{ pathname: data.url }} target='_blank'>{data.url}</Link>
               </Card.Body>
             </Card>
 
        </div>
        </Row>
    )
}