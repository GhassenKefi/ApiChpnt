import React from 'react'
import { Card, ListGroup,ListGroupItem } from 'react-bootstrap'

const SingleUserCard = ({user}) => {
    // console.log(user[0].name)
    return (
        <Card className="SingleUserCard">
            <Card.Img variant="top" src="https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes.png" />
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                    hi i'm {user.name} i work at {user.company.name}, {user.company.catchPhrase} 
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{user.phone}</ListGroupItem>
                <ListGroupItem>{user.address.street} {user.address.suite} </ListGroupItem>
                <ListGroupItem>{user.address.city} {user.address.zipcode}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">{user.email}</Card.Link>
                <Card.Link href="#">{user.website}</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default SingleUserCard