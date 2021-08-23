import axios from 'axios'
import React, { useState,useEffect } from 'react'
import SingleUserCard from '../Components/SingleUserCard'
import PostsList from '../Components/PostsList'

const SingleUser = ({match}) => {

    let [user,setUser]=useState()
    let [posts,setPosts]=useState([])
    let [loadingUser,setLoadingUser]=useState(true)
    let [loadingPosts,setLoadingPosts]=useState(true)


    const getUser=()=>{
        let id=match.params.userid;
        axios.get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
        .then(function(response){
            let thisuser
            response.data.map(e=>thisuser=e)
            setUser(thisuser)
            setLoadingUser(false)
        })
        .catch(function (error){console.log(error)})
    }

    const getPosts=()=>{
        let id=match.params.userid;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(function(response){
            let postslist=response.data
            setPosts(postslist)
            setLoadingPosts(false)
        })
        .catch(function (error){console.log(error)})
    }

    useEffect(() => {
        getUser()
        getPosts()
    }, [])

    return (
        <>

            {loadingUser || loadingPosts ? <p>Loading ... </p>:<div className="SingleUserLayout"><SingleUserCard user={user}/>  <PostsList posts={posts}/></div>}
        </>
    )
}

export default SingleUser
