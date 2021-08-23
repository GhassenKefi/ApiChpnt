import React from 'react'
import PostsCard from './PostsCard'

const PostsList = ({posts}) => {

    let postList=posts.map(e=><PostsCard key={e.id} post={e}/>)

    return (
        <div className="PostList">
            {postList}
        </div>
    )
}

export default PostsList
