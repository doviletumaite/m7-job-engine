import React from 'react'
import { Card } from 'react-bootstrap'
import { BookmarkHeart } from "react-bootstrap-icons"
import { Link } from 'react-router-dom'


export default function Job({ data }) {
    return (
        <div>
           
            <Card className="m-5">
                
            <Link to={`/${data.company_name}`}>
               <Card.Header as="h5">
                   <BookmarkHeart className="mx-5"/>
                {data.title}</Card.Header>
                </Link>
               <Card.Body>
                 <Card.Title>{data.company_name}</Card.Title>
               
                 <Link to={{ pathname: data.url }} target='_blank'>{data.url}</Link>
               </Card.Body>
             </Card>
      </div>
    )
}