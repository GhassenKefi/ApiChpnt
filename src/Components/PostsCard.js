import React from 'react'
import { Card } from 'react-bootstrap'

const PostsCard = ({ post }) => {
    return (
        <Card className="PostCard">
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    {post.body}
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default PostsCard
