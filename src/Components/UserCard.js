import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
    return (
        <Card className="userCard">
            <Card.Img variant="top" src="https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes.png" />
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Link to={`/user/${user.id}`}>Go somewhere</Link>
            </Card.Body>
        </Card>
    )
}

export default UserCard

