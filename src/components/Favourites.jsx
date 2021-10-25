import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'
import { connect, useDispatch } from 'react-redux'
import { removeFromFav } from '../store/actions'

const mapDispatchToProps = (dispatch) => ({
    removeFromFav: (f) => { dispatch(removeFromFav(f)) }
})

const Favourites = ({favourites}) => {
 const dispatch = useDispatch()

        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <ListGroup>
                        {
                           favourites.elements.map(f => (
                                <ListGroupItem>
                                    <StarFill onClick={() => dispatch(removeFromFav(f))} />
                                    <span>{ f }</span>
                                </ListGroupItem>
                            ))
                            
                        }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
}

export default connect(s => s, mapDispatchToProps)(Favourites)