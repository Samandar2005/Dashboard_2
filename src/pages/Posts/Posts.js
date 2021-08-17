import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setPosts } from '../../redux/actions';
import { Slide } from "react-awesome-reveal";
import 'bootstrap/dist/css/bootstrap.min.css';

const Posts = () => {
    const { menu } = useParams();
    console.log("todoni ichida", menu);

    const dispatch = useDispatch();

    useEffect(() => {
        setPosts(dispatch);
    }, [])

    const data = useSelector(state => state.posts);
    console.log(data)
    return (
        <div className="row">
          <h1>Posts</h1>
            {data.map((v, i) => <div className="col-md-4 mt-3  main">
              <Slide className="p-4 h-100  mt-2 main1">
              <div className="user">
                <p className="name">{v.title}</p>
                <p className="body text-center">{v.body}</p>
              </div>
            </Slide>
             </div>)}

        </div>
    )
}

export default Posts;